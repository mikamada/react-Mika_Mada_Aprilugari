import { useMutation } from "@apollo/client";
import { DeletePassenger } from "../../graphql/mutation";
import { GetPassenger } from "../../graphql/query";

export default function useDeletePassenger() {
  const [deleteAction, { loading: loadingDelete }] = useMutation(
		DeletePassenger,
		{ refetchQueries: [GetPassenger] }
	);
  return{
    deleteAction,
    loadingDelete
  }
}