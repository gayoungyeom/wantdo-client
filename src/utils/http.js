import axios from 'axios';

const devUrl = `http://localhost:4000`;
const pubUrl = `http://ec2-3-35-217-154.ap-northeast-2.compute.amazonaws.com:3000`;

const url = () => {
  return pubUrl;
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
