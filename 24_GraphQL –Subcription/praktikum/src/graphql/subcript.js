import { gql } from '@apollo/client';

export const SubcriptionPassenger = gql`
	subscription MySubscription {
		pengunjung {
			id
			nama
			umur
			jenis_kelamin
		}
	}
`;
