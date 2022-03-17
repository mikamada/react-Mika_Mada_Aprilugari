import React from 'react';
import '../../src/App.css';

const List = (toDo) => {
	toDo = [
		{
			id: 1,
			title: 'Membuat Komponen',
			completed: true,
		},
		{
			id: 2,
			title: 'Unit Testing',
			completed: false,
		},
		{
			id: 3,
			title: 'Setup Development Environment',
			completed: true,
		},
		{
			id: 4,
			title: 'Deploy ke server',
			completed: false,
		},
	];
	return (
		<section className="container">
			{toDo.map((toDo) => (
				<li>
					<div className="bd-list">
						<p
							className={`${toDo.completed ? 'coret' : ''}`}
							style={{
								textDecorationLine: toDo.completed ? 'line-through' : '',
							}}
						>
							{toDo.title}
						</p>
					</div>
				</li>
			))}
		</section>
	);
};

export default List;
