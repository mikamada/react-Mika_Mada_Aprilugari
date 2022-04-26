import ListItem from './ListItem';
const ListPassenger = (props) => {
	return (
		<div>
			<table cellPadding="5px" cellSpacing="0" style={{ margin: 'auto' }}>
				<thead bgcolor="red">
					<td>Nama</td>
					<td>Umur</td>
					<td>Jenis Kelamin</td>
					<td bgcolor="white" className="removeBorder"></td>
				</thead>
				{props.data.pengunjung.map((item) => (
					<ListItem
						key={item.id}
						data={item}
						onDeletePassenger={props.deleteAction}
						// onEditAction={props.editAction}
					/>
				))}
			</table>
		</div>
	);
};

export default ListPassenger;
