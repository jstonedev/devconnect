import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
	experience: { company, title, location, to, from, description },
}) => {
	return (
		<div>
			<h3 className="text-dark">{company}</h3>
			<span>
				<small>{location}</small>
			</span>

			<p>
				<Moment format="MM/DD/YYYY">{from}</Moment> -{" "}
				{!to ? " Now" : <Moment format="MM/DD/YYYY">{to}</Moment>}
			</p>
			<p>
				<strong>Position: </strong> {title}
			</p>
			<p>
				<strong>Description: </strong> {description}
			</p>
		</div>
	);
};

ProfileExperience.propTypes = {
	experience: PropTypes.array.isRequired,
};

export default ProfileExperience;