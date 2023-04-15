import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "408740c5-1e6b-42b6-a275-abc2b7556ad3",
  },
});
