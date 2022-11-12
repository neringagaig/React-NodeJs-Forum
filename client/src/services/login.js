import axios from "../api/axios";

const LOGIN_URL = `/login`;

const login = async (credentials) => {
  const response = await axios.post(LOGIN_URL, credentials);
  return response.data;
};

const loginService = {
  login,
};

export default loginService;
