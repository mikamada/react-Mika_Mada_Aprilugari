import { gql } from "@apollo/client";

export const GetPassenger = gql`
	query MyQuery {
		pengunjung {
			id
			nama
			umur
			jenis_kelamin
		}
	}
`;