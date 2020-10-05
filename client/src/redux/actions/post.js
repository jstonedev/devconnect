import axios from "axios";
import { setAlert } from "./alert";
import {
	DELETE_POST,
	GET_POSTS,
	GET_POST,
	CREATE_POST,
	POST_ERROR,
	UPDATE_LIKES,
} from "./types";

// Get posts
export const getPosts = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/posts");

		dispatch({
			type: GET_POSTS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: error.response,
		});
	}
};

// Add like
export const addLike = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`/api/posts/like/${id}`);

		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: error.response.statusText },
		});
	}
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`/api/posts/unlike/${id}`);

		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: error.response.statusText },
		});
	}
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/posts/${id}`);

		dispatch({
			type: DELETE_POST,
			payload: id,
		});

		dispatch(setAlert("Post Removed", "success"));
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: error.response.statusText },
		});
	}
};

// Add post
export const createPost = (formData) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const res = await axios.post("/api/posts", formData, config);

		dispatch({
			type: CREATE_POST,
			payload: res.data,
		});

		dispatch(setAlert("Post Created!", "success"));
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: error.response.statusText },
		});
	}
};

// Get post
export const getPost = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/posts/${id}`);

		dispatch({
			type: GET_POST,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: error.response,
		});
	}
};
