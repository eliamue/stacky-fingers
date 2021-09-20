export const fetchAllResources = async () => {
  const res = await fetch('https://salty-forest-33057.herokuapp.com/');

  const { results } = await res.json();

  return results;
};

export const fetchOneResource = async (resourceId) => {
  const res = await fetch(`https://salty-forest-33057.herokuapp.com/${resourceId}`);

  const { id, src_name, category, src_description, st_address, city, us_state, zip, phone, text_num, website, email, is_24_7 } = await res.json();

  return {
    id,
    src_name,
    category,
    src_description,
    st_address,
    city,
    us_state,
    zip,
    phone,
    text_num,
    website,
    email,
    is_24_7
  };
};
