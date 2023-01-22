import axios from "axios"
import {
    getAuth,
    onAuthStateChanged,
    signInWithCustomToken
} from 'firebase/auth';

const API_URL_REGISTER = `http://localhost:8080/api/users/signup`
const API_URL_LOGIN = `http://localhost:8080/api/users/login`


const register = async (userData) => {
    const response = await axios.post(API_URL_REGISTER, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data;
}

const login = async (userData) => {
    const response = await axios.post(API_URL_LOGIN, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data;
}

const logout = async () => {
    console.log('looged out')
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService;