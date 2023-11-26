import React, { CSSProperties, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import parseDate from 'utils/parseDate';
import ListItem from '../ListItem';
import styles from './List.module.scss';

interface ListProps<T> {
  data: T[];
  dir?: CSSProperties['flexDirection'];
}

const List = <
  T extends { id: string | number; name: string; created: string }
>({
  data,
  dir,
}: ListProps<T>) => {
  const [searchParams] = useSearchParams();
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    const currentSort =
      searchParams.get('sort') ?? localStorage.getItem('sort');

    const newData = [...data].sort((a, b) =>
      currentSort === 'ASC'
        ? +parseDate(a.created) - +parseDate(b.created)
        : +parseDate(b.created) - +parseDate(a.created)
    );

    setSortedData(newData);
  }, [data, searchParams]);

  return (
    <ul className={styles.list} style={{ flexDirection: dir }}>
      {sortedData.map(({ id, name, ...rest }) => (
        <ListItem key={id} {...{ id, name }} {...rest} />
      ))}
    </ul>
  );
};

export default List;
