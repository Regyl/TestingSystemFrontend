import * as axios from "axios";
const BASE_URL = "http://localhost:8090"; //process.env.TestingSystemUrl

const getInstance = axios.create({
    baseURL: BASE_URL,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
});

const postInstance = axios.create({
    baseURL: BASE_URL,
    method: "POST",
    headers: {
        "Content-Type": "application/json",

    },
});

const deleteInstance = axios.create({
    baseURL: BASE_URL,
    method: "DELETE"
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
        return postInstance.post("/register", user);
    },
    loginIn(user) {
        return login.post('/sign-in', user, {withCredentials: true});
    },
    logout() {
        return login.post('/logout', {withCredentials: true});
    },
    getAllSubjects() {
        return getInstance.get('/subjects/');
    },
    postSubject(subject) {
        return postInstance.post('/subjects/', subject);
    },
    deleteSubject(id) {
        return deleteInstance.delete('/subjects/' + id);
    },
    getAllStudentGroups() {
        return getInstance.get('/students/groups/');
    },
    postStudentGroup(group) {
        return postInstance.post('/students/groups/', group);
    },
    deleteStudentGroup(id) {
        return deleteInstance.delete('/students/groups/' + id);
    },
    getAllStudents() {
        return getInstance.get('/students/');
    }
}
