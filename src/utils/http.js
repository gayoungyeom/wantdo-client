import axios from 'axios';

const devUrl = `http://localhost:4000`;
const pubUrl = ``;

const url = () => {
  return devUrl;
};

const isError = (e) => {
  console.log(e);
};

export const getData = async (path, callback) => {
  try {
    const res = await axios.get(`${url()}${path}`);
    callback(res.data);
  } catch (e) {
    isError(e);
  }
};
