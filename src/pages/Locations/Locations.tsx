import React from 'react';
import { Outlet } from 'react-router-dom';
import locations from 'data/location.json';
import List from 'components/List';
import CategoryLayout from 'components/CategoryLayout';

const Locations = () => {
  return (
    <CategoryLayout>
      <Outlet />
      <List data={locations} dir='column' />
    </CategoryLayout>
  );
};

export default Locations;
