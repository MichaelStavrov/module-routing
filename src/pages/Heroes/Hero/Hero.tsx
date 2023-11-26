import React from 'react';
import characters from 'data/characters.json';
import useData from 'hooks/useData';
import makeCardData from 'utils/makeCardData';
import Card from 'components/Card';
import { CharacterData } from 'types';

const Hero = () => {
  const data = useData(characters as CharacterData[]);

  if (!data) {
    return null;
  }

  const { name, image, status, species, gender, type } = data;

  const cardData = makeCardData({
    Имя: name,
    Статус: status,
    Вид: species,
    Пол: gender,
    Тип: type,
  });

  return <Card data={cardData} image={image} />;
};

export default Hero;
