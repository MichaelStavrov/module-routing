import React from 'react';
import episode from 'data/episode.json';
import useData from 'hooks/useData';
import makeCardData from 'utils/makeCardData';
import Card from 'components/Card';
import { EpisodData } from 'types';

const Episode = () => {
  const data = useData(episode as EpisodData[]);

  if (!data) return null;

  const { name, episode: ep } = data;

  const cardData = makeCardData({
    Имя: name,
    Эпизод: ep,
  });

  return <Card data={cardData} />;
};

export default Episode;
