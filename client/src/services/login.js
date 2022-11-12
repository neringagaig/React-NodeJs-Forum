import axios from "../api/axios";

const LOGIN_URL = `/login`;

const login = async () => {
  const response = await axios.post(LOGIN_URL);
  return response.data;
};

const loginService = {
  login,
};

export default loginService;
