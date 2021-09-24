import React from 'react';
import { useParams } from 'react-router';
import AddResource from '../components/resources/AddResource';
import { useOneResource } from '../hooks/useOneResource';
import Header from '../components/Header';
import Controls from '../components/resources/Controls';

const spinner =
  'https://i.redd.it/o6m7b0l6h6pz.gif';

const AddContainer = () => {
  const { id } = useParams();
  const { loading } = useOneResource(id);

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
      <Header />
      <AddResource />
      <Controls />
    </>
  );
};

export default AddContainer;
