import { GetPassenger } from '../graphql/query';
import { useQuery } from '@apollo/client';

export default function useGetPassenger() {
	const { data, loading } = useQuery(GetPassenger);
	return {
		data,
		loading,
	};
}
