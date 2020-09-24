import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const INITIALSTATE = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	isLoading: true,
	user: null,
};

export default function (state = INITIALSTATE, action) {
	const { type, payload } = action;

	switch (type) {
		case REGISTER_SUCCESS:
			localStorage.setItem("token", payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				isLoading: false,
			};
		case REGISTER_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				isLoading: false,
			};
		default:
			return state;
	}
}
