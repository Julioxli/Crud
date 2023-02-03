import axios from "axios";

const API = axios.create({
    baseURL: "https://api-livro.onrender.com",
});

export default API