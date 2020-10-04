import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/auth";

const Navbar = ({ auth: { isAuthenticated, isLoading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to="/profiles">
					<i className="fas fa-users" />{" "}
					<span className="hide-sm">Developers </span>
				</Link>
			</li>
			<li>
				<Link to="/posts">
					<i className="fas fa-scroll" />{" "}
					<span className="hide-sm">Posts </span>
				</Link>
			</li>
			<li>
				<Link to="/dashboard">
					<i className="fas fa-user" />{" "}
					<span className="hide-sm">Dashboard </span>
				</Link>
			</li>
			<li>
				<a onClick={logout} href="#!">
					<i className="fas fa-sign-out-alt" />{" "}
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to="/profiles">
					<i className="fas fa-users" />{" "}
					<span className="hide-sm">Developers </span>
				</Link>
			</li>
			<li>
				<Link to="/register">
					<i className="fas fa-user-plus" />{" "}
					<span className="hide-sm">Register </span>
				</Link>
			</li>
			<li>
				<Link to="/login">
					<i className="fas fa-sign-in-alt" />{" "}
					<span className="hide-sm">Login </span>
				</Link>
			</li>
		</ul>
	);

	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">
					<i className="fas fa-code">DevConnect</i>
				</Link>
			</h1>
			{!isLoading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
