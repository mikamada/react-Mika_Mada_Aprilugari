import ListPassenger from './ListPassenger';
import Header from './Header';
import { gql, useQuery, useMutation } from '@apollo/client';
import PassengerInput from './PassengerInput';

export const getPassenger = gql`
	query MyQuery {
		pengunjung {
			id
			nama
			umur
			jenis_kelamin
		}
	}
`;

const deletePassenger = gql`
	mutation deletePassenger($id: uuid!) {
		delete_pengunjung_by_pk(id: $id) {
			id
		}
	}
`;

const insertNewPassenger = gql`
	mutation MyMutation2($object: pengunjung_insert_input!) {
		insert_pengunjung_one(object: $object) {
			id
			nama
		}
	}
`;

const Home = () => {
	// Query
	const { loading, data } = useQuery(getPassenger);

	// Mutation
	const [deleteAction, { loading: loadingDelete }] = useMutation(
		deletePassenger,
		{ refetchQueries: [getPassenger] }
	);
	const [insertPassenger, { loading: loadingInsert }] = useMutation(
		insertNewPassenger,
		{ refetchQueries: [getPassenger] }
	);

	const handleDelete = (id) => {
		deleteAction({ variables: { id: id } });
	};

	if (loading || loadingDelete || loadingInsert) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Header />
			<ListPassenger
				data={data}
				deleteAction={handleDelete}
				// editAction={editData}
			/>
			<PassengerInput insertAction={insertPassenger} />
		</div>
	);
};

export default Home;
