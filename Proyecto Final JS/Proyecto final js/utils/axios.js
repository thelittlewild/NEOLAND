import axios from "axios";

export const axiosUtil = (options) => {
  return axios.request(options).then((res) => res.data);
};
