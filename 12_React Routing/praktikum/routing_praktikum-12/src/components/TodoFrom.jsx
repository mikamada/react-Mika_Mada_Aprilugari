import React from 'react';
import { Component } from 'react';
class TodoForm extends Component {
	state = {
		title: '',
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const FormIsNotEmpt = this.state.title;
		if (FormIsNotEmpt) {
			const newDataTodo = {
				title: this.state.title,
			};

			this.props.tambahTodo(newDataTodo);
			this.setState({
				title: '',
			});
		} else {
			alert('Buat todo terlebih dahulu!');
		}
	};
	render() {
		return (
			<>
				<input
					className="input-todo"
					type="text"
					name="title"
					placeholder="add todo..."
					value={this.state.title}
					onChange={this.onChange}
					style={{
						width: '75%',
						outline: 'none',
						borderRadius: '30px',
						fontSize: '16px',
						padding: '12px 20px 12px 15px',
						border: '2px solid #aaa',
					}}
				/>
				<button
					onClick={this.handleSubmit}
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
	}
}

export default TodoForm;
