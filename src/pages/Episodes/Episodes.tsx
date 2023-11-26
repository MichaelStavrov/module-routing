import React from 'react';
import { Outlet } from 'react-router-dom';
import episodes from 'data/episode.json';
import List from 'components/List';
import CategoryLayout from 'components/CategoryLayout';

const Episodes = () => {
  return (
    <CategoryLayout>
      <Outlet />
      <List data={episodes} dir='column' />
    </CategoryLayout>
  );
};

export default Episodes;
