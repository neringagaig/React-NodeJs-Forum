import axios from "axios";

const login = async (credentials) => {
  const baseUrl = `https://localhost:3000/api/${login}`;

  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const object = {
  login,
};

export default object;
