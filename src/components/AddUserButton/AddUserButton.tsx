import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './AddUserButton.module.scss';

export const AddUserButton: React.FC = () => {
  return (
    <div className={classes.newUserBtn}>
      <NavLink to="/users/new-user">
        <button
          type="button"
          className="button is-info"
        >
          Add User
        </button>
      </NavLink>
    </div>
  );
};
