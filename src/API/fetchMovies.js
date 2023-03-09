import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'dd32b08009b8c26db83a645989914c74';

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const getTrending = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=1`);
    return response.data;
}

export const getDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
}

export const getCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;
}

export const getReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`);
    return response.data.results;
}