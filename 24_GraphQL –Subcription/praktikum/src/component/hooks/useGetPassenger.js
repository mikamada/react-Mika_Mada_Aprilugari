import { useQuery } from '@apollo/client';
import { GetPassenger } from '../../graphql/query';
import { SubcriptionPassenger } from '../../graphql/subcript';

export default function useGetPassenger() {
	const { data, loading, error, subscribeToMore } = useQuery(GetPassenger);

	const subcriptPassenge = () => {
		subscribeToMore({
			document: SubcriptionPassenger,
			updateQuery: (prev, { subcriptionData: { data } }) => {
				console.log(data);
				return data;
			},
		});
	};

	return {
		data,
		loading,
		error,
		subcriptPassenge,
	};
}
