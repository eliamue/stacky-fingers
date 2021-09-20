import React from 'react';
import { useParams, Link } from 'react-router';
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
      <Link to="/">
        <h2>Back to list</h2>
      </Link>
      <Detail {...resource} />
    </>
  );
};

export default resourceDetail;
