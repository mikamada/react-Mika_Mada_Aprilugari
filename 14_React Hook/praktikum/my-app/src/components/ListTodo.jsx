import React from 'react';
import TodoItem from './TodoItem';

const ListTodo = (props) => {
	const { data, hapusItem /*handleChecked*/ } = props;
	return (
		<div>
			{data.map((dataTodo) => (
				<TodoItem
					key={dataTodo.id}
					item={dataTodo}
					hapusItem={hapusItem}
					// handleChecked={handleChecked}
				/>
			))}
		</div>
	);
};

export default ListTodo;
