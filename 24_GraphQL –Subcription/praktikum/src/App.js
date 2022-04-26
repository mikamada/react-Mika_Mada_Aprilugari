import './App.css';
import Home from './component/Home';
import EditPassenger from './component/EditPassenger';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';


const httpLink = new HttpLink({
	uri: 'https://data-passanger-70.hasura.app/v1/graphql',
	headers: {
		'x-hasura-admin-secret':
			'hUo2rCBw4jn6XJCbqmQ3AKYsTU4ExQaW03AMXq2QoXF5HZ2emrMz9vx9yixfhaWg',
	},
});

const wsLink = new GraphQLWsLink(
	createClient({
		url: 'wss://data-passanger-70.hasura.app/v1/graphql',
		connectionParams: {
			headers: {
				'x-hasura-admin-secret':
					'hUo2rCBw4jn6XJCbqmQ3AKYsTU4ExQaW03AMXq2QoXF5HZ2emrMz9vx9yixfhaWg',
			},
		},
	})
);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/edit/:id" element={<EditPassenger />} />
					{/* <Route path="*" element={<ErrorPage />} /> */}
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
