import axios from "axios";

const api = "https://pukkar.cyclic.app/api";

export const loginApi = async (formData) => {
  const jwtKey = await axios.post(`${api}/auth`, formData);
  return jwtKey.data;
};

export const registerApi = async (formData) => {
  const res = await axios.post(`${api}/users`, formData);

  return { data: res.data.user, token: res.data.token };
};
