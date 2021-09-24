import { useEffect, useState } from 'react';
import { updateResource } from '../services/apiService';

export const useUpdate = (id) => {
  const [loading, setLoading] = useState(true);
  const [src_name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [src_description, setDescription] = useState('');
  const [st_address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [us_state, setUsState] = useState('');
  const [phone, setPhone] = useState('');
  const [text_num, setText] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [is_24_7, setIs247] = useState('');

  useEffect(() => {
    updateResource(id)
      .then((resource) => {
        setName(resource.src_name);
        setCategory(resource.category);
        setDescription(resource.src_description);
        setAddress(resource.st_address);
        setCity(resource.city);
        setZip(resource.zip);
        setUsState(resource.us_state);
        setPhone(resource.phone);
        setText(resource.text_num);
        setWebsite(resource.website);
        setEmail(resource.email);
        setIs247(resource.is_24_7);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleCategory = ({ target }) => {
    setCategory(target.value);
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleAddress = ({ target }) => {
    setAddress(target.value);
  };

  const handleCity = ({ target }) => {
    setCity(target.value);
  };

  const handleZip = ({ target }) => {
    setZip(target.value);
  };

  const handleUsState = ({ target }) => {
    setUsState(target.value);
  };

  const handlePhone = ({ target }) => {
    setPhone(target.value);
  };

  const handleText = ({ target }) => {
    setText(target.value);
  };

  const handleWebsite = ({ target }) => {
    setWebsite(target.value);
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleIs247 = ({ target }) => {
    setIs247(target.value);
  };

  return {
    loading,
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
    handleName,
    handleCategory,
    handleDescription,
    handleAddress,
    handleCity,
    handleZip,
    handleUsState,
    handlePhone,
    handleText,
    handleEmail,
    handleWebsite,
    handleIs247,
  };
};
