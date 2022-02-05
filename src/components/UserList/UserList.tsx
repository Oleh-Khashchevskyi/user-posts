import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserItem } from '../UserItem/UserItem';
import { fetchUsers } from '../../api/users';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { User } from '../../types/User';

import classes from './UserList.module.scss';
import { Loader } from '../Loader/Loader';

export const UserList:React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const { users, loading, error } = useTypedSelector(state => state.userReducer);

  let localUsers = [];

  if (localStorage.getItem('users')) {
    localUsers = JSON.parse(localStorage.getItem('users') || '');
  }

  const allUsers = [...users].concat(localUsers);
  const visibleUsers = allUsers.filter((user: User) => (
    user.name.toLowerCase().includes(query.toLowerCase())
  ));

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2 className="title">{error}</h2>;
  }

  return (
    <div className={classes.users}>
      <input
        className="input"
        type="text"
        placeholder="Search.."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {visibleUsers.map((user: User) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
});
