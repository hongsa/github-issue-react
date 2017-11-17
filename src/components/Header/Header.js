import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import {Container, Col, Row} from 'reactstrap';

import styles from './Header.css';

const cx = classNames.bind(styles);
const Header = () => {
  return (
  <div className="flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col>
          <div className={cx('header')}>
            <NavLink exact to="/" className={cx('item')} activeClassName={cx('active')}>홈</NavLink>
            <NavLink exact to="/about" className={cx('item')} activeClassName={cx('active')}>404</NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default Header;