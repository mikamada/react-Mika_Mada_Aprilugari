import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import useEditPassenger from '../hooks/useEditDataPassenger';

const EditPassenger = (props) => {
	const location = useLocation();

	const { editAction, loadingEdit } = useEditPassenger();

	const [editData, setEditData] = useState({
		nama: location.state.nama,
		umur: location.state.umur,
		jenis_kelamin: location.state.jenis_kelamin,
	});

	const onchange = (e) => {
		setEditData({
			...editData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		editAction({
			variables: {
				pk_id: {
					id: location.state.id,
					nama: editData.nama,
					umur: editData.umur,
					jenis_kelamin: editData.jenis_kelamin,
				},
			},
		});
	};

	if (loadingEdit) {
		<span>Loading....</span>;
	}

	return (
		<div onSubmit={handleSubmit}>
			<p>Masukkan Nama Anda</p>
			<input
				type="text"
				className="input-text"
				placeholder="Nama anda ..."
				name="nama"
				value={editData.nama}
				onChange={onchange}
			/>
			<p>Masukkan Umur Anda</p>
			<input
				type="number"
				className="input-text"
				placeholder="Umur anda ..."
				name="umur"
				value={editData.umur}
				onChange={onchange}
			/>
			<p>Masukkan Jenis Kelamin Anda</p>
			<input
				type="text"
				className="input-text"
				placeholder="Umur anda ..."
				name="jenis_ke;amin"
				value={editData.jenis_kelamin}
				onChange={onchange}
			/>
			<p></p>
			<button onClick={handleSubmit}>Submit</button>
			<button style={{ marginLeft: '10px' }}>Selesai</button>
		</div>
	);
};

export default EditPassenger;
