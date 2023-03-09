import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'API/fetchMovies';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(results => setReviews(results));
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p> There is no reviews</p>
      ) : (
        <div className={styles.list_reviews}>
          <ul className={styles.list}>
            {reviews.map(({ id, author, created_at, content }) => (
              <li key={id} className={styles.item}>
                <h2 className={styles.author}>{author}</h2>
                <p className={styles.created}>{created_at}</p>
                <p className={styles.content}>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      ;
    </>
  );
};

export default Reviews;
