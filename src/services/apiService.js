export const fetchManyResources = async () => {
  try {
    const res = await fetch(
      'https://salty-forest-33057.herokuapp.com/api/v1/resources'
    );

    const resources = await res.json();
    return resources.map((resource) => ({
      id: resource.id,
      name: resource.src_name,
      category: resource.category,
      description: resource.src_description,
      address: resource.st_address,
      city: resource.city,
      us_state: resource.us_state,
      zip: resource.zip,
      phone: resource.phone,
      text: resource.text_num,
      website: resource.website,
      email: resource.email,
      is247: resource.is_24_7,
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
      name: src_name,
      category,
      description: src_description,
      address: st_address,
      city,
      us_state,
      zip,
      phone,
      text: text_num,
      website,
      email,
      is247: is_24_7,
    };
  } catch (error) {
    console.error('error');
  }
};

export const createResource = async () => {
  try {
    const res = await fetch(
      'https://salty-forest-33057.herokuapp.com/api/v1/resources/',
      {
        method: 'POST',
        body: JSON.stringify(res),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

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
      name: src_name,
      category,
      description: src_description,
      address: st_address,
      city,
      us_state,
      zip,
      phone,
      text: text_num,
      website,
      email,
      is247: is_24_7,
    };
  } catch (error) {
    console.error('error');
  }
};

export const updateResource = async (resourceId) => {
  const res = await fetch(
    `https://salty-forest-33057.herokuapp.com/api/v1/resources/edit/${resourceId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    }
  );
  return res.json();
};

export const deleteResource = async (resourceId) => {
  const res = await fetch(
    `https://salty-forest-33057.herokuapp.com/api/v1/resources/${resourceId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    }
  );
  return res.json();
};
