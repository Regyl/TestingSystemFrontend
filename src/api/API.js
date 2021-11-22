import * as axios from "axios";
const BASE_URL = "http://localhost:8090"; //process.env.TestingSystemUrl

const instance = axios.create({
    baseURL: BASE_URL,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
});

const headerInstance = axios.create({
    baseURL: BASE_URL,
    method: "POST",
    headers: {
        "Content-Type": "application/json",

    },
});

const login = axios.create({
    baseURL: BASE_URL,
    method: "POST",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
    },
});


export const API = {
    postNewUser(user) {
        return headerInstance.post("/register", user);
    },
    loginIn(user) {
        return login.post('/sign-in', user, {withCredentials: true});
    },
    logout() {
        return login.post('/logout', {withCredentials: true});
    },
    getAllSubjects() {
        return instance.get('/subjects/');
    },
    postSubject(subject) {
        return headerInstance.post('/subjects/', subject);
    }
}
