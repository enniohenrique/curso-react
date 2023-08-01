import React, { useEffect } from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('mudou a rota');
  }, [location]);
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { color: 'green' } : undefined)}
        end
      >
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink
        to="sobre"
        style={({ isActive }) => (isActive ? { color: 'green' } : undefined)}
      >
        Sobre
      </NavLink>{' '}
      |{' '}
      <NavLink
        to="login"
        style={({ isActive }) => (isActive ? { color: 'green' } : undefined)}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
