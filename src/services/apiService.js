export const fetchManyResources = async () => {
  try {
    const res = await fetch(
      'https://salty-forest-33057.herokuapp.com/api/v1/resources'
    );

    const resources = await res.json();
    return resources.map((resource) => ({
      id: resource.id,
      src_name: resource.src_name,
      category: resource.category,
      src_description: resource.src_description,
      st_address: resource.st_address,
      city: resource.city,
      us_state: resource.us_state,
      zip: resource.zip,
      phone: resource.phone,
      text_num: resource.text_num,
      website: resource.website,
      email: resource.email,
      is_24_7: resource.is_24_7,
    }));
  } catch (error) {
    console.error('error');
  }
};

export const fetchOneResource = async (resourceId) => {
  try {
    const res = await fetch(
      `https://salty-forest-33057.herokuapp.com/api/v1/resources/${resourceId}`
    );
    const {
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
      is_24_7,
    } = await res.json();

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
      is_24_7,
    };
  } catch (error) {
    console.error('error');
  }
};

export const createResource = async (data) => {
  try {
    const res = await fetch(
      'http://salty-forest-33057.herokuapp.com/api/v1/resources',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );

    const {
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
      is_24_7,
    } = await res.json();

    return ({
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
      is_24_7,
    });

  } catch (error) {
    console.error('error');
  }
};

export const updateResource = async (id, updatedResource) => {
  const res = await fetch(
    `https://salty-forest-33057.herokuapp.com/api/v1/resources/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedResource),
    }
  );
  return res.json();
};

export const deleteResource = (id) => {
  return fetch(
    `https://salty-forest-33057.herokuapp.com/api/v1/resources/${id}`, { method: 'DELETE' })
    .then((res) => res.json());
};
