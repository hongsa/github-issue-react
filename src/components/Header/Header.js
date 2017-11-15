import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item" activeClassName="active">홈</NavLink>
      <NavLink to="/about" className="item" activeClassName="active">소개</NavLink>
    </div>
  );
};

export default Header;