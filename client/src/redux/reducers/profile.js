import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

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
			return {
				...state,
				profile: payload,
				isLoading: false,
			};
		case PROFILE_ERROR:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		default:
			return state;
	}
}
