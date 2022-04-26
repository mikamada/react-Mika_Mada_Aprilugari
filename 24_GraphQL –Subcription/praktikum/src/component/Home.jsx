import ListPassenger from './ListPassenger';
import Header from './Header';
import PassengerInput from './PassengerInput';
import useDeletePassenger from './hooks/useDeletePassenger';
import useInsertNewPassenger from './hooks/useInsertNewPassenger';
import useSubscriptionPassenger from './hooks/useSubcription';
import useEditPassenger from './hooks/useEditPassenger';

const Home = () => {
	// Mutation
	const { deleteAction, loadingDelete } = useDeletePassenger();
	const { insertPassenger, loadingInsert } = useInsertNewPassenger();
	const { loadingEdit } = useEditPassenger();

	// Subcription
	const { data, loading, error } = useSubscriptionPassenger();

	const handleDelete = (id) => {
		deleteAction({ variables: { id: id } });
	};

	if (loading || loadingDelete || loadingInsert || loadingEdit) {
		return <span>Loading...</span>;
	}

	if (error) {
		console.log(error);
		return null;
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
