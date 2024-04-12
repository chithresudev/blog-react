const API_URL = "http://localhost:8085/api/auth/";

const login = (username, password) => {
  return fetch(API_URL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: username, password: password }),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.success) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return fetch(API_URL + "logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
