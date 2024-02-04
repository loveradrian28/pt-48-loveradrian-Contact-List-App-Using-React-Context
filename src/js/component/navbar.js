import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-2">
			<Link to="/" className='text-decoration-none text-dark'>
				<span className="navbar-brand mb-0 h1 text-dark">Contact list</span>
			</Link>
			
		</nav>
	);
};
