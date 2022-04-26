import { gql } from "@apollo/client";

export const DeletePassenger = gql`
	mutation deletePassenger($id: uuid!) {
		delete_pengunjung_by_pk(id: $id) {
			id
		}
	}
`;

export const InsertNewPassenger = gql`
	mutation MyMutation2($object: pengunjung_insert_input!) {
		insert_pengunjung_one(object: $object) {
			id
			nama
		}
	}
`;

export const EditDataPassenger = gql`
	mutation MyMutation3($pk_id: pengunjung_pk_columns_input!) {
		update_pengunjung_by_pk(pk_columns: $pk_id) {
			id
			nama
			umur
			jenis_kelamin
		}
	}
`;
