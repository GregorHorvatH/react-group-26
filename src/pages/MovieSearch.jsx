import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import _ from 'lodash';
import queryString from 'query-string';
import { searchMovies } from '../utils/moviesApi';

const MovieSearch = () => {
  const location = useLocation();
  const { pathname, search } = location;
  const initialQueryState = queryString.parse(search); // parse(search)

  const { push } = useHistory();
  const [query, setQuery] = useState(initialQueryState.query || '');
  const [movieList, setMovieList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []); // eslint-disable-line

  const handleChange = (e) => {
    setQuery(e.target.value);
    push({
      ...location,
      search: `?query=${e.target.value}`,
    });
  };

  const movieSearch = useCallback(
    _.debounce(
      (query) =>
        searchMovies(query).then(({ results }) => setMovieList(results)),
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
      <input type="text" value={query} ref={inputRef} onChange={handleChange} />

      <ul>
        {movieList.map(({ id, original_title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `${pathname}/${id}`,
                state: {
                  query,
                },
              }}
            >
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
