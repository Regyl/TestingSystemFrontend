import * as axios from "axios";

const BASE_URL = "http://localhost:8090"; //process.env.TestingSystemUrl

const postInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

const instance = axios.create({
    baseURL: BASE_URL
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
        return instance.get('/subjects/', {withCredentials: true});
    },
    postSubject(subject) {
        return postInstance.post('/subjects/', subject, {withCredentials: true});
    },
    deleteSubject(id) {
        return instance.delete('/subjects/' + id, {withCredentials: true});
    },
    getAllStudentGroups() {
        return instance.get('/students/groups/', {withCredentials: true});
    },
    postStudentGroup(group) {
        return postInstance.post('/students/groups/', group, {withCredentials: true});
    },
    deleteStudentGroup(id) {
        return instance.delete('/students/groups/' + id, {withCredentials: true});
    },
    getAllStudents() {
        return instance.get('/students/', {withCredentials: true});
    },
    getAllFaculties() {
        return instance.get('/subjects/faculties/', {withCredentials: true});
    },
    getSubjectsByFaculty(faculty) {
        return instance.get('/subjects/faculties?faculty=' + faculty, {withCredentials: true});
    //    TODO: edit
    },
    getTestsBySubject(subjectId) {
        return instance.get('/tests/subject?id=' + subjectId, {withCredentials: true});
    },
    postTest(test) {
        return postInstance.post('/tests/', test, {withCredentials: true});
    },
    deleteTest(id) {
        return instance.delete('/tests/'+id, {withCredentials: true});
    },
    getQuestionsByTest(testId) {
        return instance.get('/questions/test?id=' + testId, {withCredentials: true});
    },
    postQuestion(question) {
        return postInstance.post('/questions/', question, {withCredentials: true});
    },
    deleteQuestion(id) {
        return instance.delete('/questions/'+id, {withCredentials: true});
    },
    getAnswersByQuestion(id) {
        return instance.get('/answers/question?id=' + id, {withCredentials: true});
    },
    postAnswer(answer) {
        return postInstance.post('/answers/', answer, {withCredentials: true});
    },
    deleteAnswer(id) {
        return instance.delete('/answers/' + id, {withCredentials: true});
    },
    postStudent(student) {
        return postInstance.post('/students/', student, {withCredentials: true})
    },
    getTests() {
        return instance.get('/tests/', {withCredentials: true});
    },
    getTest(id) {
        return instance.get('/tests/' + id, {withCredentials: true});
    },
    getTestForStudents(testId) {
        return instance.get('/questions/students/test?id=' + testId, {withCredentials: true});
    },
    updateStudentsGroup(data) {
        return postInstance.put('/students/group', data, {withCredentials: true});
    },
    postStudentResults(body) {
        return postInstance.post('/students/results/', body, {withCredentials: true});
    },
    getAllStudentResults() {
        return instance.get('/students/results/', {withCredentials: true});
    }
}