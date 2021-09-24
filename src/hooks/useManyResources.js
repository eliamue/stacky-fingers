import { useEffect, useState } from 'react';
import { fetchManyResources } from '../services/apiService';

export const useManyResources = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchManyResources()
      .then((res) => setResources(res))
      .finally(() => setLoading(false));
  }, []);

  return { loading, resources };
};
