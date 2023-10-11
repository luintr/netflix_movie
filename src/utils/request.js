import axios from "axios";

// API KEY: d0df8b7fb0eb66ce03855cb6448b4845
// API REQUEST: https://api.themoviedb.org/3/movie/550?api_key=d0df8b7fb0eb66ce03855cb6448b4845
// REACT_APP_MOVIE_API_KEY = d0df8b7fb0eb66ce03855cb6448b4845

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

// export default request
