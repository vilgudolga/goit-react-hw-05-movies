import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import WebappTemplate from "./WebappTemplate/WebappTemplate";
import styles from './App.module.css';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<WebappTemplate />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};