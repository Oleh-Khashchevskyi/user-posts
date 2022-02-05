import classNames from 'classnames';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import classes from './NewUser.module.scss';

export const NewUser: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  const addUser = () => {
    if (!name || !userName) {
      return;
    }

    const user = {
      id: uuidv4(),
      name,
      username: userName,
    };

    let users = [];

    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users') || '');
    }

    localStorage.setItem('users', JSON.stringify([
      ...users,
      user,
    ]));

    setName('');
    setUserName('');
    navigate('/users');
  };

  return (
    <div className={classes.newUser}>
      <div className={classes.content}>
        <div className="field">
          <label className="label" htmlFor="#">
            Name
            <div className="control has-icons-left has-icons-right">
              <input
                className={classNames('input', {
                  'is-success': name.trim(),
                  'is-danger': !name.trim(),
                })}
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value.replace(/[^a-z|\s]/gi, ''))}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                {!name.trim() ? (
                  <i className="fas fa-exclamation-triangle"></i>
                ) : (
                  <i className="fas fa-check" />
                )}
              </span>
            </div>
            {!name.trim() ? (
              <p className="help is-danger">This name is invalid</p>
            ) : (
              <p className="help is-success">This name is available</p>
            )}
          </label>
        </div>

        <div className="field">
          <label className="label" htmlFor="#">
            Username
            <div className="control has-icons-left has-icons-right">
              <input
                className={classNames('input', {
                  'is-success': userName.trim(),
                  'is-danger': !userName.trim(),
                })}
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value.replace(/\W/g, ''))}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                {!userName.trim() ? (
                  <i className="fas fa-exclamation-triangle"></i>
                ) : (
                  <i className="fas fa-check" />
                )}
              </span>
            </div>
            {!userName.trim() ? (
              <p className="help is-danger">This username is invalid</p>
            ) : (
              <p className="help is-success">This username is available</p>
            )}
          </label>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              className="button is-link"
              onClick={addUser}
            >
              Submit
            </button>
          </div>
          <div className="control">
            <NavLink to="/users">
              <button type="button" className="button is-link is-light">Cancel</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
