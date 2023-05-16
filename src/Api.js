import axios from "axios";

const Api = axios.create({
  baseURL: "https://portfolio-api-murex.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;
