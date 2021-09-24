import React from 'react';
import { useParams } from 'react-router';
import CrudController from '../components/resources/Controller';
import { useOneResource } from '../hooks/useOneResource';
import Header from '../components/Header';

const spinner =
  'https://i.redd.it/o6m7b0l6h6pz.gif';

const AddContainer = () => {
  const { id } = useParams();
  const { loading } = useOneResource(id);

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
      <Header />
      <CrudController />
    </>
  );
};

export default AddContainer;
