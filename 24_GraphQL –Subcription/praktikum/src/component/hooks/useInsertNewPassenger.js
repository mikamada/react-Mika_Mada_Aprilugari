import { useMutation } from "@apollo/client";
import { InsertNewPassenger } from "../../graphql/mutation";
import { GetPassenger } from "../../graphql/query";

export default function useInsertNewPassenger(){
  const [insertPassenger, { loading: loadingInsert }] = useMutation(
		InsertNewPassenger,
		{ refetchQueries: [GetPassenger] }
	);

  return{
    insertPassenger,
    loadingInsert
  }
}