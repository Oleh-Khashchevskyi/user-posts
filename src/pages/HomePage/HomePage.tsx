import React from 'react';
import { Header } from '../../components/Header/Header';

import classes from './HomePage.module.scss';

export const HomePage:React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className={classes.content}>
          <h1 className={classes.title}>Hello, everyone!</h1>
          <img src="https://jmd.im/wp-content/uploads/2017/06/blackvi_thumbnail.jpg" alt="#" />
        </div>
      </main>
    </>
  );
};
