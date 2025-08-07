import axios from "axios";

const createtext = async (data: { text: string }) => {
  return axios.post("http://localhost:3003/api/v1/texts/create", data);
};
const getText = async (data: { code: string }) => {
  return axios.get(`http://localhost:3003/api/v1/texts/getNote/${data.code}`);
};

const TextServices = { createtext, getText };
export default TextServices;
