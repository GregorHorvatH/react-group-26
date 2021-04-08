import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import { search } from '../utils/moviesApi';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleChange = (e) => setQuery(e.target.value);

  const movieSearch = useCallback(
    _.debounce(
      (query) => search(query).then(({ results }) => setMovieList(results)),
      300,
    ),
    [],
  );

  useEffect(() => {
    if (!query) return;

    movieSearch(query);
  }, [query, movieSearch]);

  return (
    <div className="movie-search">
      <input type="text" value={query} onChange={handleChange} />

      <ul>
        {movieList.map(({ id, original_title }) => (
          <li key={id}>{original_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
