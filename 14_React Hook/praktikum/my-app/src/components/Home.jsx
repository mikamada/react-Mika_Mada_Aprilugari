import { v4 as uuidv4 } from 'uuid';
import ListTodo from './ListTodo';
import TodoForm from './TodoForm';
import React, { useState } from 'react';
const initialValue = [
	{
		id: uuidv4(),
		title: 'Mengerjakan Exercise',
		completed: false,
	},
	{
		id: uuidv4(),
		title: 'Mengerjakan Assingment',
		completed: false,
	},
];
const Home = () => {
	const [data, setData] = useState(initialValue);

	const hapusTodo = (id) => {
		setData((oldData) =>
			oldData.filter((item) => {
				return item.id !== id;
			})
		);
	};

	const tambahTodo = (newTodo) => {
		const newItem = { id: uuidv4(), ...newTodo };
		setData((oldData) => [...oldData, newItem]);
	};

	return (
		<>
			<nav
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: '15px 10%',
					borderBottom: '1px solid #eaeaea',

					backgroundColor: 'rgb(181, 181, 247)',
				}}
			>
				<h1
					style={{
						color: 'white',
						textShadow: '2px 5px 2px #000',
						fontSize: '30px',
					}}
				>
					Todo App
				</h1>
			</nav>
			<div
				style={{
					padding: '30px 15px',
					width: '40%',
					margin: 'auto',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<TodoForm tambahTodo={tambahTodo} />
			</div>
			<div
				style={{
					border: '1px solid #333',
					padding: '15px 24px',
					width: '40%',
					margin: 'auto',
					borderRadius: '30px',
					boxShadow: '5px 8px 4px #000',
				}}
			>
				<h3>What's todo plan to day?</h3>
				<ListTodo
					// handleChecked={this.handleChecked}
					data={data}
					hapusItem={hapusTodo}
				/>
			</div>
		</>
	);
};

export default Home;
