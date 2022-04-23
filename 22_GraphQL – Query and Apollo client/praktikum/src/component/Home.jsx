import ListPassenger from './ListPassenger';
import Header from './Header';
import { gql, useQuery } from '@apollo/client';
import PassengerInput from './PassengerInput';

const getPassenger = gql`
	query MyQuery {
		pengunjung {
			id
			nama
			umur
			jenis_kelamin
		}
	}
`;

const Home = () => {
	const { loading, data } = useQuery(getPassenger);

	if (loading) return <div>Loading...</div>;

	return (
		<div>
			<Header />
			<ListPassenger data={data} />
			<PassengerInput />
		</div>
	);
};

export default Home;
