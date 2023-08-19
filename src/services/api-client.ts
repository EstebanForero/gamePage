import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'df685bca695b4aae885ea7e1d65f56a2'
    }
})