import axios from "../api/axios";
const POSTSURL = `/posts`;

let token = null;
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(POSTSURL);
  return response.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(POSTSURL, newObject, config);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${POSTSURL}/${id}`, config);
  return response.data;
};

const postsService = {
  setToken,
  getAll,
  create,
  remove,
};

export default postsService;
