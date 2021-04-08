import axios from 'axios';

const apiKey = 'd05f5f872f0f74667bcdb4179984cab2';

export const search = (query) =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    )
    .then(({ data }) => data);
