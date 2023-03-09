import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'API/fetchMovies';
import styles from './Pages.module.css';

const Home = () => {
  const location = useLocation;
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getTrending()
      .then(resoults => setMovies([...resoults]))
      .catch(error => setError(error.message));
  }, []);

  return (
    <>
      <h1 className={styles.trending}>Tranding today</h1>
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
      {error && <p> Something went wrong, please try again.</p>}
    </>
  );
};

export default Home;
