import { useEffect, useState } from 'react';
import { deleteResource } from '../services/apiService';

export const useDelete = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    deleteResource()
      .then((res) => setResources(res))
      .finally(() => setLoading(false));
  });

  return { loading, resources };
};
