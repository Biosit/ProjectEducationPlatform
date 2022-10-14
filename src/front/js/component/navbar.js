import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light ">
			<div className="container">
			<div className="col align-self-center">
				<Link to="/demo">
					<span className="navbar-brand mb-0 h1 text-light mb-3 p-2 fs-3 ">INGRESAR</span>
					
				</Link>
			</div>	
			</div>	
		</nav>
	);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Login</span>
        </Link>
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Admin</span>
        </Link>
        <Link to="/">
          <span className="navbar-brand mb-0 h1">teacher</span>
        </Link>
        <Link to="/">
          <span className="navbar-brand mb-0 h1">student</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
