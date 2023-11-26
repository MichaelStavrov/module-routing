import React from 'react';
import locations from 'data/location.json';
import useData from 'hooks/useData';
import makeCardData from 'utils/makeCardData';
import Card from 'components/Card';
import { LocationData } from 'types';

const Location = () => {
  const data = useData(locations as LocationData[]);

  if (!data) {
    return null;
  }

  const { name, dimension, type } = data;

  const cardData = makeCardData({
    Имя: name,
    Измерение: dimension,
    Тип: type,
  });

  return <Card data={cardData} />;
};

export default Location;
