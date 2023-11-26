import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesMap } from 'routesMap';
import Home from 'pages/Home';
import Locations from 'pages/Locations';
import Heroes from 'pages/Heroes';
import Episodes from 'pages/Episodes';
import StartPage from 'pages/StartPage';
import Hero from 'pages/Heroes/Hero';
import NotFoundPage from 'pages/NotFoundPage';
import Location from 'pages/Locations/Location';
import Episode from 'pages/Episodes/Episode';

function App() {
  return (
    <Routes>
      <Route path={RoutesMap.home} element={<Home />}>
        <Route index element={<StartPage />} />
        <Route path={RoutesMap.locations} element={<Locations />}>
          <Route path={RoutesMap.location} element={<Location />} />
        </Route>
        <Route path={RoutesMap.heroes} element={<Heroes />}>
          <Route path={RoutesMap.hero} element={<Hero />} />
        </Route>
        <Route path={RoutesMap.episodes} element={<Episodes />}>
          <Route path={RoutesMap.episode} element={<Episode />} />
        </Route>
      </Route>
      <Route path={RoutesMap.notFound} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
