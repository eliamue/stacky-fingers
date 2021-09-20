import React from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header';
import Detail from '../components/resources/ResourceDetail';
import { useOneResource } from '../hooks/useOneResource';

const spinner =
  'https://i.redd.it/o6m7b0l6h6pz.gif';

const resourceDetail = () => {
  const { id } = useParams();
  const { loading, resource } = useOneResource(id);

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
      <Header />
      <Detail {...resource} />
    </>
  );
};

export default resourceDetail;
