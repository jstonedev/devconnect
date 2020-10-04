import { GET_POSTS, POST_ERROR } from "../actions/types";

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
		case POST_ERROR:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		default:
			return state;
	}
}
