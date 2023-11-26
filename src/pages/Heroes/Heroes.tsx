import React from 'react';
import { Outlet } from 'react-router-dom';
import characters from 'data/characters.json';
import List from 'components/List';
import CategoryLayout from 'components/CategoryLayout';

const Heroes = () => {
  return (
    <CategoryLayout>
      <Outlet />
      <List data={characters} />
    </CategoryLayout>
  );
};

export default Heroes;
