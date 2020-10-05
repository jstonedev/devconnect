import {
	GET_PROFILE,
	GET_PROFILES,
	UPDATE_PROFILE,
	PROFILE_ERROR,
	CLEAR_PROFILE,
	GET_REPOS,
} from "../actions/types";

const INITIALSTATE = {
	profile: null,
	profiles: [],
	repos: [],
	isLoading: true,
	error: {},
};

export default function (state = INITIALSTATE, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_PROFILE:
		case UPDATE_PROFILE:
			return {
				...state,
				profile: payload,
				isLoading: false,
			};
		case GET_PROFILES:
			return {
				...state,
				profiles: payload,
				isLoading: false,
			};
		case PROFILE_ERROR:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		case CLEAR_PROFILE:
			return {
				...state,
				profile: null,
				repos: [],
				isLoading: false,
			};
		case GET_REPOS:
			return {
				...state,
				repos: payload,
				isLoading: false,
			};
		default:
			return state;
	}
}
