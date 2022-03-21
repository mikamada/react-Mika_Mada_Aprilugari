import React from 'react';
import { useState } from 'react';
import '../../src/App.css';

const TodoItem = ({ item, hapusItem, isComplete }) => {
	const [isChecked, setIsChecked] = useState(isComplete);

	const _handleClick = () => {
		setIsChecked((prevValue) => !prevValue);
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				borderBottom: '1px solid #eaeaea',
			}}
		>
			<div
				onClick={_handleClick}
				isChecked={isChecked}
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<input type={'checkbox'} checked={isChecked} name={'checkbox'} />
				<p
					className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
					style={{
						paddingLeft: '10px',
						fontWeight: '500',
						fontSize: '16px',
					}}
				>
					{item.title}
				</p>
			</div>
			<button
				onClick={() => {
					hapusItem(item.id);
				}}
				style={{
					padding: '10px 15px',
					border: 'none',
					backgroundColor: '#313E60',
					borderRadius: '17px',
					fontWeight: '500',
					color: 'white',
					cursor: 'pointer',
				}}
			>
				Delete
			</button>
		</div>
	);
};

export default TodoItem;
