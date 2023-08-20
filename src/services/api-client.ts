import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '' // ! Insecure to have this here, it's just for demo purposes
        // ! in a real app, this would be in a .env file or the backend would handle the API calls
    }
})
