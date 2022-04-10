import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const ListTodo = () => {
	const todos = useSelector((state) => state.todo.todos);

	return (
		<div>
			{todos.map((item) => (
				<TodoItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default ListTodo;
