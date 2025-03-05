import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with actual API base URL

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const handleError = (error) => {
    console.error('Error fetching data:', error.message);
    throw new Error('Failed to fetch data from the API');
};