import { useMutation } from '@apollo/client';
import { GetPassenger } from '../graphql/query';
import { InsertNewPassenger } from '../graphql/mutation';

export default function useInsertNewPassenger() {
	const [insertPassenger, { loading: loadingInsert }] = useMutation(
		InsertNewPassenger,
		{ refetchQueries: [GetPassenger] }
	);

	return {
		insertPassenger,
		loadingInsert,
	};
}
