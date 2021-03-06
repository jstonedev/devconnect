import axios from "axios";
import { setAlert } from "../actions/alert";

import {
	GET_PROFILE,
	GET_PROFILES,
	UPDATE_PROFILE,
	PROFILE_ERROR,
	CLEAR_PROFILE,
	ACCOUNT_DELETED,
	GET_REPOS,
} from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/profile/me");

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (error) {
		dispatch({ type: CLEAR_PROFILE });

		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response },
		});
	}
};

// Get all profiles
export const getProfiles = () => async (dispatch) => {
	dispatch({ type: CLEAR_PROFILE });

	try {
		const res = await axios.get("/api/profile");

		dispatch({
			type: GET_PROFILES,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response },
		});
	}
};

// Get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/profile/user/${userId}`);

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response },
		});
	}
};

// Get Github repos
export const getRepos = (username) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/profile/github/${username}`);

		dispatch({
			type: GET_REPOS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response },
		});
	}
};

// Create or update profile
export const createProfile = (FormData, history, edit = false) => async (
	dispatch
) => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const res = await axios.post("/api/profile", FormData, config);

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});

		dispatch(
			setAlert(
				edit
					? "Profile Successfully Updated!"
					: "Profile Successfully Created!",
				"success"
			)
		);

		if (!edit) {
			history.push("/dashboard");
		}
	} catch (error) {
		const errors = error.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
		}

		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response },
		});
	}
};

// Add experience
export const addExperience = (FormData, history) => async (dispatch) => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const res = await axios.put("/api/profile/experience", FormData, config);

		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		});

		dispatch(setAlert("Experience Successfully Added!", "success"));

		history.push("/dashboard");
	} catch (error) {
		const errors = error.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
		}

		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response },
		});
	}
};

// Add education
export const addEducation = (FormData, history) => async (dispatch) => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const res = await axios.put("/api/profile/education", FormData, config);

		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		});

		dispatch(setAlert("Education Successfully Added!", "success"));

		history.push("/dashboard");
	} catch (error) {
		const errors = error.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
		}

		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response },
		});
	}
};

// Delete expreience
export const deleteExperience = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`api/profile/experience/${id}`);

		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		});

		dispatch(setAlert("Experience Successfully Removed!", "success"));
	} catch (error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response },
		});
	}
};

// Delete education
export const deleteEducation = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`api/profile/education/${id}`);

		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		});

		dispatch(setAlert("Education Successfully Removed!", "success"));
	} catch (error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: error.response },
		});
	}
};

// Delete account and profile
export const deleteAccount = () => async (dispatch) => {
	if (window.confirm("Are you sure? This can NOT be undone!")) {
		try {
			await axios.delete("/api/profile");

			dispatch({ type: CLEAR_PROFILE });
			dispatch({ type: ACCOUNT_DELETED });

			dispatch(
				setAlert("Your account has been permanently deleted!", "success")
			);
		} catch (error) {
			dispatch({
				type: PROFILE_ERROR,
				payload: { msg: error.response },
			});
		}
	}
};
