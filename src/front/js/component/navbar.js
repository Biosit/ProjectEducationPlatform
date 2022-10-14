import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light ">
			<div className="container">
			<div className="col align-self-center">
			
				<Link to="/demo">
				<a href="#" className="link-light h3">INGRESAR</a>
					
				</Link>
			</div>	
			</div>	
		</nav>
	);
};
