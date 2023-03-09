import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast, IMAGE_URL } from 'API/fetchMovies';

import styles from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(results => setCast(results));
  }, [movieId]);

  return (
    <>
      <div className={styles.list_section}>
        {cast.length === 0 ? (
          'There is no cast ...'
        ) : (
          <ul className={styles.list}>
            {cast.map(
              ({ id, name, profile_path, original_name, character }) => (
                <li key={id} className={styles.item}>
                  <img
                    src={
                      profile_path
                        ? `${IMAGE_URL}${profile_path}`
                        : `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png`
                    }
                    alt={original_name}
                    className={styles.item_image}
                  />
                  <h3>{name}</h3>
                  <p className={styles.item_name}> Charakter: {character}</p>
                </li>
              )
            )}
          </ul>
        )}
        ;
      </div>
    </>
  );
};

export default Cast;
