import './App.css';
import Home from './component/Home';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditPassenger from './component/EditPassenger';

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
