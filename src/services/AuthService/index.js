import axios from "axios";

import {API_URL} from "../../VARIABLE";

class AuthService {
    login(email, password) {
        return axios
            .post(`${API_URL}login`, {email, password})
            .then((response) => {
                if (response.data.access_token) {
                    localStorage.setItem("token", response.data.access_token)
                }
                return response
            })
    }

    user(token) {
        return axios({
            method: "post",
            baseURL: `${API_URL}me`,
            headers: {Authorization: `Bearer ${token}`},
        }).then((response) => {
            return response.data;
        });
    }

    isOnline(token) {
        return axios({
            method: "post",
            baseURL: `${API_URL}online`,
            headers: {Authorization: `Bearer ${token}`},
        }).then((response) => {
            return response.data;
        });
    }

    register(name, username, email, password, address, profession, phone) {
        return axios
            .post(`${API_URL}register`, {name, username, email, password, address, profession, phone})
            .then((response) => {
                console.log(response)
                return response
            }).catch((error) => {
                console.log(error)
                return error
            })
    }

    logout(token) {
        axios.delete(`${API_URL}offline`, {
            headers: {Authorization: `Bearer ${token}`},
        }).then(() => {
            return axios({
                method: "post",
                baseURL: `${API_URL}logout`,
                headers: {Authorization: `Bearer ${token}`},
            }).then((response) => {
                localStorage.removeItem('token')
                return response.data;
            });
        })
    }
}


export default new AuthService();