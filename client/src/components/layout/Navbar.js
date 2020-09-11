import React from "react";
import { Link } from "react-router-dom";
import { Landing } from "./Landing";
import { Register } from "../auth/Register";
import { Login } from "../auth/Login";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">
					<i className="fas fa-code">DevConnect</i>
				</Link>
			</h1>
			<ul>
				<li>
					<a href="#!">Developers</a>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
};
