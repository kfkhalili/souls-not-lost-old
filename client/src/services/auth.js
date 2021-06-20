import axios from "axios";

const API_URL = "http://localhost:5001/api/auth";

class AuthService {
  login(usernameOrEmail, password) {
    return axios
      .post(API_URL + "/login", {
        usernameOrEmail,
        password,
      })
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }

        return res.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
