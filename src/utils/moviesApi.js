import axios from 'axios';
import { apiKey } from './apikey';

export const searchMovies = (query) =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    )
    .then(({ data }) => data);
