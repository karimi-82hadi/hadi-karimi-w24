import api from "../configs/axios";

const getProducts = ({ queryKey }) => {
  const page = queryKey[1];
  return api.get(`/products?page=${page}`);
};

export { getProducts };
