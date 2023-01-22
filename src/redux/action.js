import {
    getAuth,
    onAuthStateChanged,
    signInWithCustomToken
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

        dispatch({ type: "loginSuccess", payload: response.data });

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
            dispatch({ type: "signupSuccess", payload: response.data });
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

export const loadUser = (userIdToken) => async (dispatch) => {

    try {
        // dispatch({ type: "loadUserRequest" });
        // console.log('userIdToken: ', userIdToken);
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                user.getIdToken(true)
                    .then(function (idToken) {
                        // console.log(idToken)
                    }).catch(function (error) {
                        console.log(error)
                    });
                // ...
            } else {
                // User is signed out
                // ...
                console.log('user is signed out');
            }
        });

        const getTok = await signInWithCustomToken(auth, userIdToken)

        // auth.onIdTokenChanged(function(user) {
        //     if (user) {
        //       console.log(user)
        //     }
        //   });

        // console.log("getTok", getTok._tokenResponse.idToken);

        // https://securetoken.googleapis.com/v1/token?key=[API_KEY]

        const uid = localStorage.getItem("token");

        const response = await axios.get(`http://localhost:8080/api/users/me`, {
            headers: {
                Authorization: `Bearer ${getTok._tokenResponse.idToken}`,
                uid: uid
            },
        });
        console.log("Load user", response.data)
        dispatch({ type: "loadUserSuccess", payload: response.data });
    } catch (error) {
        // console.log("Error 2", error.message);

        dispatch({
            type: "loadUserFailure",
            payload: error.message,
        });

    }
};