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
	mutation MyMutation($id: uuid, $nama: String, $umur: Int, $jenis_kelamin: String ) {
  update_pengunjung(where: {id: {_eq: $id}}, _set: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}) {
    returning {
      id
      nama
    }
  }
}

`;
