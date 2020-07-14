import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-544b4.firebaseio.com/",
  //baseURL: "https://burger-ebe20.firebaseio.com/",
});

export default instance;
