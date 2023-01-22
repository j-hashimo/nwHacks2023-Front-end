import {
    getAuth,
} from 'firebase/auth';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {

    try {
        dispatch({ type: "loginRequest" });
        const response = await axios.post(
            `http://localhost:8080/api/users/login`,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.data);

        localStorage.setItem("token", response.data.token);

        dispatch({ type: "loginSuccess", payload: response.data.token });

    } catch (error) {

        dispatch({
            type: "loginFailure",
            payload: error.message,
        });

    }
};

export const signup = (email, password) => async (dispatch) => {
    console.log(email, password);
    try {
        dispatch({ type: "signupRequest" });

        const response = await axios.post(
            `http://localhost:8080/api/users/signup`,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(response);

        localStorage.setItem("token", response.data.token);

        const delay = await setTimeout(function () {
            dispatch({ type: "signupSuccess", payload: response.data.token });
        }, 500);


    } catch (error) {
        dispatch({
            type: "signupFailure",
            payload: error,
        });

    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "logoutRequest" });

        const response = await axios.post(`http://localhost:8080/api/users/logout`);
        console.log(response);

        const auth = getAuth();
        await auth.signOut();


        localStorage.removeItem("token");

        dispatch({ type: "logoutSuccess" });

    } catch (error) {
        dispatch({
            type: "logoutFailure",
            payload: error.message,
        });

    }
};