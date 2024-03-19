import axiosClient from "./axiosClient";

const getProducts = (endpoint) => {
  return axiosClient.get(endpoint);
};
export const apis = { getProducts };
