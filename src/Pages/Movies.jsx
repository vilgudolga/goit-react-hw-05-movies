import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { searchMovies } from 'API/fetchMovies';

import styles from './Pages.module.css';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const input = e.currentTarget;
    setSearchParams(query !== '' ? { query: input.elements.query.value } : {});
    input.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) return;
    const getMovies = async () => {
      const { results } = await searchMovies(query);
      setMovies(results);
    };
    getMovies();
  }, [query]);

  return (
    <>
      <div className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <input
            className={styles.SearchFormInput}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movie"
          />
          <button type="submit" className={styles.SearchFormButton}>
            Search
          </button>
        </form>

        <ul className={styles.list}>
          {movies &&
            movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <p>{title}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Movies;
