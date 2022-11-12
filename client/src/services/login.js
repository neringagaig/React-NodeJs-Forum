import axios from "axios";

const baseUrl = `https://localhost:3003/login`;

const login = async () => {
  const response = await axios.post(baseUrl);
  return response.data;
};

const loginService = {
  login,
};

export default loginService;
