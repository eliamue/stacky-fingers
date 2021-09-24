import React, { useEffect, useState } from 'react';
import ResourceList from '../components/resources/ResourceList';
import { fetchManyResources } from '../services/apiService';

const spinner = 'https://i.redd.it/o6m7b0l6h6pz.gif';

const ResourcesContainer = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const loadResources = async () => {
      const resourcesFromApi = await fetchManyResources();
      setResources(resourcesFromApi);
      setLoading(false);
    };
    loadResources();
  });
  

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>

      <ResourceList 
        resources={resources}
      />
    </>
  );
};

export default ResourcesContainer;
