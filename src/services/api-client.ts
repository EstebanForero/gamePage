import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'df685bca695b4aae885ea7e1d65f56a2' // ! Insecure to have this here, it's just for demo purposes
        // ! in a real app, this would be in a .env file or the backend would handle the API calls
    }
})
