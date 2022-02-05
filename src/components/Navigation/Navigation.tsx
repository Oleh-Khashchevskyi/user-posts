import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.scss';

export const Navigation:React.FC = () => {
  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink
            className={({ isActive }) => classNames(classes.link, {
              [classes.activeLink]: isActive,
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => classNames(classes.link, {
              [classes.activeLink]: isActive,
            })}
            to="/users"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
