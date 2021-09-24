import React from 'react';
import Resource from './Resource';
import { useManyResources } from '../../hooks/useManyResources';
import styles from '../styles/List.css';

const spinner =
  'https://i.redd.it/o6m7b0l6h6pz.gif';

const List = () => {
  const { loading, resources } = useManyResources();
  if(loading) return <img src={spinner} alt="Loading" />;
  
  return (
    <ul aria-label="srclist" className={styles.list}>
      {resources.map((resource) => (
        <li key={resource.id}>
          <Resource {...resource} />
        </li>
      ))}
    </ul>
  );
};

export default List;
