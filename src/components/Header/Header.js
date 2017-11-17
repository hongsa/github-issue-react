import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames/bind';
import {Container, Col, Row} from 'reactstrap';

import styles from './Header.css';

const cx = classNames.bind(styles);
const Header = () => {
  return (
    <Container>
      <div className={cx('header')}>
        <NavLink exact to="/" className={cx('item')}>Home</NavLink>
      </div>
    </Container>
  );
};

export default Header;