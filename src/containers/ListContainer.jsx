import React from 'react';
import { useManyResources } from '../hooks/useManyResources';
import List from '../components/resources/ResourceList';

const spinner =
  'https://i.redd.it/o6m7b0l6h6pz.gif';

const resourcesList = () => {
  const { loading, resources } = useManyResources();

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
      <List resources={resources} />
    </>
  );
};

export default resourcesList;
