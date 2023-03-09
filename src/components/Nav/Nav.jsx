import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? [styles.link, styles.active].join(' ')
            : styles.link;
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="movies"
        className={({ isActive }) => {
          return isActive
            ? [styles.link, styles.active].join(' ')
            : styles.link;
        }}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Nav;
