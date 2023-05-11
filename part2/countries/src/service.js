import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all";

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const createItem = async (newItem) => {
  const res = await axios.post(baseUrl, newItem);
  return res.data;
};

const deleteItem = async (id) => {
  axios.delete(`${baseUrl}/${id}`);
};

const updateItem = (newItem) => {
  console.log(newItem.id);
  axios.put(`${baseUrl}/${newItem.id}`, newItem);
};

const networkService = {
  getAll: getAll,
  createItem: createItem,
  deleteItem: deleteItem,
  updateItem: updateItem,
};

export default networkService;
