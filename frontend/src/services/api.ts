import axios from "axios";

const cors = require('cors')


const api = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/http://127.0.0.1:8000"
})

export default api;
