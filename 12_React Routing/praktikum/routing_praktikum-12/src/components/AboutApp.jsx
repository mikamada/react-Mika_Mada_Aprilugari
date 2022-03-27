import React from 'react';
import Navbar from './Navbar';

const AboutApp = () => {
	return (
		<>
			{/* tidak perlu mengisi props, yang penting ada, itu tandanya udah merubah jadi true */}
			<Navbar isAboutPage />
			<div
				style={{
					textAlign: 'left',
					width: '50%',
					margin: 'auto',
				}}
			>
				<h1>About the App</h1>
				<p>
					`` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam et
					optio vel in voluptatibus placeat inventore hic, ducimus consequuntur,
					dolorum doloribus. Totam explicabo, ducimus laborum ad voluptatibus
					vel consequatur repellendus.
				</p>
			</div>
		</>
	);
};

export default AboutApp;
