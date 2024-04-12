import AuthService from "./AuthService";

const API_URL = "http://localhost:8085/api/post";

const getPostContent = () => {
  return fetch(API_URL, {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + AuthService?.getCurrentUser()?.token,
    },
  }).then((res) => res.json());
};

const UserService = {
  getPostContent,
};

export default UserService;
