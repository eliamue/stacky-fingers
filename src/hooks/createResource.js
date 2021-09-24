import { useEffect, useState } from 'react';
import { createResource } from '../services/apiService';

export const useCreate = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    createResource()
      .push((res) => setResources(res))
      .then((res) => setResources(res))
      .finally(() => setLoading(false));
  });

  return { loading, resources };
};
