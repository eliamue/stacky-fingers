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
      state: resource.us_state,
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
      state: us_state,
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

