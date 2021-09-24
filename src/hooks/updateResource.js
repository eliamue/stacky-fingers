import { useEffect, useState } from 'react';
import { updateResource } from '../services/apiService';

export const useUpdate = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    updateResource()
      .then((res) => setResources(res))
      .finally(() => setLoading(false));
  });

  return { loading, resources };
};
