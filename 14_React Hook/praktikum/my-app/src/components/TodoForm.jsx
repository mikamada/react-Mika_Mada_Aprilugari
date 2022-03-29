import React, { useState } from 'react';

const TodoForm = (props) => {
	const [data, setData] = useState({
		title: '',
	});

	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formIsNotEmpty = data.title;
		if (formIsNotEmpty) {
			const newTodo = {
				title: data.title,
			};
			props.tambahTodo(newTodo);
			setData({
				title: '',
			});
		} else {
			alert('Data masih ada yang kosong!');
		}
	};

	return (
		<>
			<input
				className="input-todo"
				type="text"
				name="title"
				placeholder="add todo..."
				value={data.title}
				onChange={onChange}
				style={{
					width: '75%',
					outline: 'none',
					borderRadius: '30px',
					fontSize: '16px',
					padding: '12px 20px 12px 15px',
					border: '2px solid #aaa',
					boxShadow: '2px 3px 2px #222',
				}}
			/>
			<button
				onClick={handleSubmit}
				style={{
					padding: '10px 15px',
					border: 'none',
					backgroundColor: '#5C40CC',
					borderRadius: '17px',
					fontWeight: '500',
					color: 'white',
					cursor: 'pointer',
				}}
			>
				Submit
			</button>
		</>
	);
};

export default TodoForm;
