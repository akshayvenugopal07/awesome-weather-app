import axios from 'axios';

baseURL = `https://api.openweathermap.org/data/2.5/`;

export function getRequest(path) {
    return axios.get(baseURL + path);
}

export function postRequest(path, params) {
    // We can add headers here or send them from the calling function
    return axios.post(baseURL + path, params);
}

export function deleteRequest(path, id) {
    return axios.delete(baseURL + path + id);
}

export default { getRequest, postRequest, deleteRequest };

// export class ApiService {

//     constructor() {
//         baseURL = `https://api.openweathermap.org/data/2.5/`;
//     }

//     static getRequest(path) {
//         return axios.get(this.baseURL + path);
//     }

//     static postRequest(path, params) {
//         // We can add headers here or send them from the calling function
//         return axios.post(this.baseURL + path, params);
//     }

//     static deleteRequest(path, id) {
//         return axios.delete(this.baseURL + path + id);
//     }
// }