import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Logo.module.scss';

export const Logo:React.FC = () => {
  return (
    <NavLink to="/">
      <img src="http://habrastorage.org/files/26e/c52/350/26ec52350e284332a1a4d6d09aedff7e.png" alt="logo" className={classes.logo} />
    </NavLink>
  );
};
