import axios from 'axios';

const ApiService = {
    async getData(url) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
};

export default ApiService;
