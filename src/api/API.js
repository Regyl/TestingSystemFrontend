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
        return login.post('/logout');
    },
    getAllSubjects() {
        return getInstance.get('/subjects/', {withCredentials: true});
    },
    postSubject(subject) {
        return postInstance.post('/subjects/', subject, {withCredentials: true});
    },
    deleteSubject(id) {
        return deleteInstance.delete('/subjects/' + id, {withCredentials: true});
    },
    getAllStudentGroups() {
        return getInstance.get('/students/groups/', {withCredentials: true});
    },
    postStudentGroup(group) {
        return postInstance.post('/students/groups/', group, {withCredentials: true});
    },
    deleteStudentGroup(id) {
        return deleteInstance.delete('/students/groups/' + id, {withCredentials: true});
    },
    getAllStudents() {
        return getInstance.get('/students/', {withCredentials: true});
    },
    getAllFaculties() {
        return getInstance.get('/subjects/faculties/', {withCredentials: true});
    },
    getSubjectsByFaculty(faculty) {
        return getInstance.get('/subjects/faculties?faculty=' + faculty, {withCredentials: true});
    //    TODO: edit
    },
    getTestsBySubject(subjectId) {
        return getInstance.get('/tests/subject?id=' + subjectId, {withCredentials: true});
    },
    postTest(test) {
        return postInstance.post('/tests/', test, {withCredentials: true});
    },
    deleteTest(id) {
        return deleteInstance.delete('/tests/'+id, {withCredentials: true});
    },
    getQuestionsByTest(testId) {
        return getInstance.get('/questions/test?id=' + testId, {withCredentials: true});
    },
    postQuestion(question) {
        return postInstance.post('/questions/', question, {withCredentials: true});
    },
    deleteQuestion(id) {
        return deleteInstance.delete('/questions/'+id, {withCredentials: true});
    },
    getAnswersByQuestion(id) {
        return getInstance.get('/answers/question?id=' + id, {withCredentials: true});
    },
    postAnswer(answer) {
        return postInstance.post('/answers/', answer, {withCredentials: true});
    },
    deleteAnswer(id) {
        return deleteInstance.delete('/answers/' + id, {withCredentials: true});
    },
    postStudent(student) {
        return postInstance.post('/students/', student, {withCredentials: true})
    },
    getTests() {
        return getInstance.get('/tests/', {withCredentials: true});
    },
    getTest(id) {
        return getInstance.get('/tests/' + id, {withCredentials: true});
    },
    getTestForStudents(testId) {
        return getInstance.get('/questions/students/test' + testId, {withCredentials: true});
    }
}