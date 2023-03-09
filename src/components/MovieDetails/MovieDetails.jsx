import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails, IMAGE_URL } from 'API/fetchMovies';

import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetails(movieId).then(results => setMovie(results));
  }, [movieId]);

  return (
    <>
      {!movie ? (
        <p> This movie is not found</p>
      ) : (
        <>
          <Link to="/" className={styles.go_back}>
            GO BACK
          </Link>
          <div className={styles.details_container}>
            <div>
              <img
                src={
                  movie.poster_path
                    ? IMAGE_URL + movie.poster_path
                    : `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png`
                }
                alt={movie.title}
                width="250"
                height=""
              />
            </div>

            <div className={styles.info}>
              <h2 className={styles.title}>{movie.title}</h2>
              <p className={styles.score}>
                User score: {`${movie.vote_average * 10}`}%
              </p>
              <h3 className={styles.overview}>Overview</h3>
              <p className={styles.info_overview}>{`${movie.overview}`}</p>
              <h3 className={styles.genres}>Genres</h3>
              <p>{`${movie.genres.map(genre => genre.name).join(', ')}`}</p>
            </div>
          </div>
        </>
      )}

      <h2 className={styles.more_information}>Additional information</h2>
      <div>
        <Link to={'cast'} className={styles.link}>
          <button type="button" className={styles.button}>
            Cast
          </button>
        </Link>

        <Link to={'reviews'} className={styles.link}>
          <button type="button" className={styles.button}>
            Reviews
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
