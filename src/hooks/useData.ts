import { useParams } from 'react-router-dom';

const useData = <T extends { id: number }>(data: T[]): T | undefined => {
  const params = useParams();
  const item = data.find(({ id }) => params.id === id.toString());

  return item;
};

export default useData;
