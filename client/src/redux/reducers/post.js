import {
	DELETE_POST,
	GET_POSTS,
	CREATE_POST,
	POST_ERROR,
	UPDATE_LIKES,
	GET_POST,
	ADD_COMMENT,
	REMOVE_COMMENT,
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
		case GET_POST:
			return {
				...state,
				post: payload,
				isLoading: false,
			};
		case CREATE_POST:
			return {
				...state,
				posts: [payload, ...state.posts],
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
		case ADD_COMMENT:
			return {
				...state,
				post: { ...state.post, comments: payload },
				isLoading: false,
			};
		case REMOVE_COMMENT:
			return {
				...state,
				post: {
					...state.post,
					comments: state.post.comments.filter(
						(comment) => comment._id !== payload
					),
				},
				isLoading: false,
			};
		default:
			return state;
	}
}
