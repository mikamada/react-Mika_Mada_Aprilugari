import { GetPassenger } from "../graphql/query";
import { EditDataPassenger } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

export default function useEditPassenger(){
  const [editAction, { loading: loadingEdit }] = useMutation(
		EditDataPassenger,
		{
			refetchQueries: [GetPassenger],
		}
	);
  return{
    editAction,
    loadingEdit
  }
}