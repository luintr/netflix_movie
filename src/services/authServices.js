import * as requestUsers from "../utils/request";

export const getUsers = (type) => {
    return requestUsers.getUser(type);
};

export const postUsers = (type, data) => {
    return requestUsers.postUser(type, data);
};

export const putUsers = (type, data) => {
    return requestUsers.putUser(type, data);
};
