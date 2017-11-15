import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink exact to="/" className={styles.item} activeClassName={styles.active}>홈</NavLink>
      <NavLink to="/about" className={styles.item} activeClassName={styles.active}>소개</NavLink>
    </div>
  );
};

export default Header;