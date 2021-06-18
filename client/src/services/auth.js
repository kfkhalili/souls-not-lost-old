import axios from "axios";

const API_URL = "http://localhost:5001/api/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "auth", {
        email,
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
    return axios.post(API_URL + "register", {
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
