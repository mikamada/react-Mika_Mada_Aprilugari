import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListTodo from './ListTodo';
import Navbar from './Navbar';
import TodoForm from './TodoFrom';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: uuidv4(),
					title: 'Mengerjakan Exercise',
					completed: false,
				},
				{
					id: uuidv4(),
					title: 'Mengerjakan Assignment',
					completed: false,
				},
			],
		};
	}

	handleChecked = () => {
		this.setState({
			completed: true,
		});
	};

	hapusItem = (id) => {
		const newItem = this.state.data.filter((item) => item.id !== id);
		this.setState({ data: newItem });
	};

	tambahTodo = (newTodo) => {
		const newTodos = { id: uuidv4(), ...newTodo };
		this.setState({ data: [...this.state.data, newTodos] });
	};

	render() {
		return (
			<>
				<Navbar />
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
					<TodoForm tambahTodo={this.tambahTodo} />
				</div>
				<div
					style={{
						border: '1px solid #333',
						padding: '15px 24px',
						width: '40%',
						margin: 'auto',
						borderRadius: '30px',
						boxShadow: '5px 5px rgba(47,79,79,0.35)',
					}}
				>
					<h3>What's todo plan to day?</h3>
					<ListTodo
						// handleChecked={this.handleChecked}
						data={this.state.data}
						hapusItem={this.hapusItem}
					/>
				</div>
			</>
		);
	}
}

export default Home;
