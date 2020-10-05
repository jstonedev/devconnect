import {
	DELETE_POST,
	GET_POSTS,
	POST_ERROR,
	UPDATE_LIKES,
} from "../actions/types";

const INITIALSTATE = {
	posts: [],
	post: null,
	isLoading: true,
	error: {},
};

export default function (state = INITIALSTATE, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_POSTS:
			return {
				...state,
				posts: payload,
				isLoading: false,
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => post._id !== payload),
				isLoading: false,
			};
		case POST_ERROR:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		case UPDATE_LIKES:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === payload.id ? { ...post, likes: payload.likes } : post
				),
				isLoading: false,
			};
		default:
			return state;
	}
}
