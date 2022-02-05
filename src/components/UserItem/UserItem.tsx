import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserItem:React.FC<Props> = ({ user }) => {
  const selectedUser = useParams().userId || 0;

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://iconape.com/wp-content/files/nb/368023/svg/person-logo-icon-png-svg.png" alt="Person" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{user.name}</p>
            <p className="subtitle is-6">{`@${user.username}`}</p>
          </div>

          {+selectedUser === user.id ? (
            <NavLink to="/users">
              <button
                type="button"
                className="button open-post-info is-link"
              >
                <i className="far fa-eye-slash" />
              </button>
            </NavLink>
          ) : (
            <NavLink to={`/users/${user.id}`}>
              <button
                type="button"
                className="button open-post-info"
                onClick={toTop}
              >
                <i className="far fa-eye" />
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
