import './Home.css';

import { useLinkClickHandler } from 'react-router-dom';

const ListItem = ({ onEditAction, ...props }) => {
	const { id, nama, umur, jenis_kelamin } = props.data;
	const handleClick = useLinkClickHandler(`/edit/${id}`, {
		state: props.data,
	});

	return (
		<tr>
			<td>{nama}</td>
			<td>{umur}</td>
			<td>{jenis_kelamin}</td>
			<td className="removeBorder">
				<button onClick={handleClick}>Edit</button>
			</td>
			<td className="removeBorder">
				<button
					onClick={() => {
						props.onDeletePassenger(id);
					}}
				>
					Hapus
				</button>
			</td>
		</tr>
	);
};

export default ListItem;
