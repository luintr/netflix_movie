import axios from "axios";

// API KEY: fb8ea5fc661d9d45989dd05c8adeaea5
// API REQUEST: https://api.themoviedb.org/3/movie/550?api_key=fb8ea5fc661d9d45989dd05c8adeaea5
// REACT_APP_MOVIE_API_KEY = fb8ea5fc661d9d45989dd05c8adeaea5

const moviedb = { params: { api_key: process.env.REACT_APP_MOVIE_API_KEY } };

const request = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export const get = async (path, option = moviedb) => {
    const response = await request.get(path, option);
    return response.data;
};

const requestUsers = axios.create({
    baseURL: "https://652637d267cfb1e59ce802ac.mockapi.io/api/movie/",
});

export const getUser = async (path) => {
    const responseUsers = await requestUsers.get(path);
    return responseUsers.data;
};

export const postUser = async (type, data) => {
    const postUsers = await requestUsers.post(type, data);
    return postUsers;
};

export const putUser = async (type, data) => {
    const putUsers = await requestUsers.put(type, data);
    return putUsers;
};

export default request;
