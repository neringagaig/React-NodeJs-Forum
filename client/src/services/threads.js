import axios from "../api/axios";
const THREADSURL = `/threads`;

let token = null;
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(THREADSURL);
  return response.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(THREADSURL, newObject, config);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${THREADSURL}/${id}`, config);
  return response.data;
};

const threadsService = {
  setToken,
  getAll,
  create,
  remove,
};

export default threadsService;
