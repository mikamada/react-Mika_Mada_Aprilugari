import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { sidebarData, additionalData } from './sidebarData';
const Navbar = ({ isAboutPage = false, ...props }) => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => {
		setSidebar(!sidebar);
	};

	const navActive = () => {
		setActived(!actived);
	};

	return (
		<div>
			<div className="navbar">
				<button className="btn-menu" onClick={showSidebar}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</button>
			</div>
			<div className={sidebar ? 'bar-menu active' : 'bar-menu'}>
				<ul className="sidebar-items">
					<li>
						<Link to="#" className="btn-close-sidebar">
							<AiOutlineClose onClick={showSidebar} />
						</Link>
					</li>
					{isAboutPage
						? sidebarData.concat(additionalData).map((item, index) => (
								<li>
									<Link to={item.path} className={item.cName} key={index}>
										{item.title.replace('About', 'About App')}
									</Link>
								</li>
						  ))
						: sidebarData.map((item) => {
								return (
									<li>
										<Link to={item.path} className={item.cName}>
											{' '}
											{item.title}{' '}
										</Link>
									</li>
								);
						  })}
				</ul>
			</div>
		</div>
	);
};

const LinkItem = ({
	// default value
	item = { cName: '', path: '', title: '' },
	...props
}) => (
	<li className={item.cName}>
		<Link to={item.path} className="nav-text">
			{item.title}
		</Link>
	</li>
);

export default Navbar;
