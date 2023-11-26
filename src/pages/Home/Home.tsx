import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
