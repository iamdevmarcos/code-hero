import axios from "axios";
import md5 from "md5";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL as string,
});

const publicKey = process.env.REACT_APP_PUBLIC_KEY as string;
const privateKey = process.env.REACT_APP_PRIVATE_KEY as string;

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const api = {
  getCharacters: async () => {
    const res = await http.get(
      `characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=10`
    );
    return res;
  },
  getSpecificCharacter: async (id: number) => {
    const res = await http.get(
      `characters/${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`
    );
    return res;
  },
};

export default api;
