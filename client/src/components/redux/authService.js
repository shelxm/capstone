import axios from 'axios';
const API = "http://localhost:5000/user/";

const register = async (userData) => {
    const response = await axios.post(API + 'register', userData)

    console.log(response.data);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const login = async (userData) => {
    const response= await axios.post(API + 'login', userData)
    console.log(response.data)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
  }

const authService = {
    register,
    logout,
    login
}

export default authService;