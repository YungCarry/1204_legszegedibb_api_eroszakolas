import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://legszegedibb.sootsoft.hu/api"
})

export default apiClient;