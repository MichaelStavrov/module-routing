import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SortControl.module.scss';

export enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

const SortControl = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    sort: SortType.ASC,
  });
  const currentSort = searchParams.get('sort') ?? localStorage.getItem('sort');
  const isAsc = currentSort === SortType.ASC;

  const handleClick = () => {
    const newSort = isAsc ? SortType.DESC : SortType.ASC;
    setSearchParams({ sort: newSort });
    localStorage.setItem('sort', newSort);
  };

  return (
    <div className={styles.sortControl}>
      <button type='button' onClick={handleClick}>
        Сортировать по дате создания{' '}
        {isAsc ? (
          <span className={styles.arrow}>&uArr;</span>
        ) : (
          <span className={styles.arrow}>&dArr;</span>
        )}
      </button>
    </div>
  );
};

export default SortControl;
