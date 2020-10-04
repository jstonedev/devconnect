import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/post";
import Spinner from "../layout/Spinner";

const Posts = ({ getPosts, post: { posts, isLoading } }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<div>
			<h1>Posts</h1>
		</div>
	);
};

Posts.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
