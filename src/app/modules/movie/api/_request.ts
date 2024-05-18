import axios from 'axios';
import { Movie, MovieDetail } from './_model'
const API_KEY = '8b24bdda';

export const fetchMovies = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=Pokemon&apikey=${API_KEY}`);
        return response.data.Search;
    } catch (error) {
        console.error('Error fetching data from OMDB API:', error);
        return [];
    }
};

export const fetchMoviesDetail = async (id: string): Promise<MovieDetail | null> => {
    try {
        const response = await axios.get<MovieDetail>(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};


