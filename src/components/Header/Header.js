import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.css';

const Header = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('header')}>
      <NavLink exact to="/" className={cx('item')} activeClassName={cx('active')}>홈</NavLink>
      <NavLink to="/about" className={cx('item')} activeClassName={cx('active')}>소개</NavLink>
    </div>
  );
};

export default Header;