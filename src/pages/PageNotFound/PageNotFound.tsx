import React from 'react';
import { NavLink } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

import classes from './PageNotFound.module.scss';

export const PageNotFound:React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className={classes.content}>
          <h1 className={classes.title}>Page Not Found</h1>
          <NavLink to="/">
            <button
              type="button"
              className="button is-link"
            >
              Go Home
            </button>
          </NavLink>
        </div>
      </main>
      <Footer />
    </>
  );
};
