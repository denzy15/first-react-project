import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "d68fe94a-d200-4f86-a174-6339a8809400",
  },
});

export const usersAPI = {
  getUsers(pageN = 1, pageSize = 10) {
    return instance
      .get(`users?page=${pageN}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

