import './App.css';
import Home from './component/Home';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://data-passanger-70.hasura.app/v1/graphql',
	cache: new InMemoryCache(),
	headers: {
		'x-hasura-admin-secret':
			'hUo2rCBw4jn6XJCbqmQ3AKYsTU4ExQaW03AMXq2QoXF5HZ2emrMz9vx9yixfhaWg',
	},
});

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<Home />
			</ApolloProvider>
		</div>
	);
}

export default App;
