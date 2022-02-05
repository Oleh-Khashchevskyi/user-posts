import React from 'react';
import { useLocation } from 'react-router-dom';
import { AddUserButton } from '../AddUserButton/AddUserButton';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

import classes from './Header.module.scss';

export const Header:React.FC = () => {
  const location = useLocation().pathname;

  return (
    <header className={classes.header}>
      <Logo />
      <Navigation />
      {location.includes('/users') && (
        <AddUserButton />
      )}
    </header>
  );
};
