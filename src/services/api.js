import axios from 'axios';

const API_KEY = '408cda5e'; // Replace this with your actual OMDb API key
const BASE_URL = 'https://www.omdbapi.com/'; // use HTTPS instead of HTTP

const fetchMovies = async (searchTerm) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                s: searchTerm,
                apikey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        throw error;
    }
};

export default fetchMovies;
