import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../redux/actions/profile";

const Profile = ({
	getProfileById,
	auth,
	profile: { isLoading, profile },
	match,
}) => {
	useEffect(() => {
		getProfileById(match.params.id);
	}, [getProfileById]);
	return (
		<Fragment>
			{profile === null || isLoading ? (
				<Spinner />
			) : (
				<Fragment>
					<Link to="/profiles" className="btn btn-light">
						Back To Profiles
					</Link>
					{auth.isAuthenticated &&
					!auth.isLoading &&
					auth.user._id === profile.user._id ? (
						<Link to="/edit-profile" className="btn btn-dark">
							Edit Profile
						</Link>
					) : null}
				</Fragment>
			)}
		</Fragment>
	);
};

Profile.propTypes = {
	getProfileById: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
