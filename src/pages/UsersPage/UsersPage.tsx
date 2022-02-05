import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { PostList } from '../../components/PostList/PostList';
import { UserList } from '../../components/UserList/UserList';

import classes from './UsersPage.module.scss';

export const UsersPage:React.FC = () => {
  const selectedUser = useParams().userId;

  return (
    <>
      <Header />
      <main>
        <div className={classes.userPage}>
          <aside className={classes.sidebar}>
            <UserList />
          </aside>
          {selectedUser && (
            <section className={classes.content}>
              <PostList />
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};
