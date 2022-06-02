import axios from "axios";

const cors = require('cors')

const api = axios.create({
    baseURL: "http://localhost:8000"
})

export default api;
