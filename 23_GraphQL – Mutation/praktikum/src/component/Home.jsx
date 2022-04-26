import ListPassenger from './ListPassenger';
import Header from './Header';
import PassengerInput from './PassengerInput';
import useGetPassenger from '../hooks/useGetPassenger';
import useDeletePassenger from '../hooks/useDelete';
import useInsertNewPassenger from '../hooks/useInsertNewPassenger';

const Home = () => {
	// Query
	const { data, loading } = useGetPassenger();

	// Mutation
	const { deleteAction, loadingDelete } = useDeletePassenger();
	const { insertPassenger, loadingInsert } = useInsertNewPassenger();

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
