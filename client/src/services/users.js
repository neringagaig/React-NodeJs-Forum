import axios from "../api/axios";
const USERSURL = `/users`;

let token = null;
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(USERSURL);
  return response.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(USERSURL, newObject, config);
  return response.data;
};

const update = async (id, newObject) => {
  const response = await axios.put(`${USERSURL}/${id}`, newObject);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${USERSURL}/${id}`, config);
  return response.data;
};

const usersService = {
  setToken,
  getAll,
  create,
  update,
  remove,
};

export default usersService;
