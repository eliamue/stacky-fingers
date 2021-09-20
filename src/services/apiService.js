export const fetchAllResources = async () => {
  const res = await fetch('https://salty-forest-33057.herokuapp.com/');

  const { results } = await res.json();

  return results;
};
