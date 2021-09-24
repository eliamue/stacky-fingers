import { useState } from 'react';

export const useCreate = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [us_state, setUsState] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [is247, setIs247] = useState('');

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
    name,
    category,
    description,
    address,
    city,
    us_state,
    zip,
    phone,
    text,
    website,
    email,
    is247,
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
    handleIs247
  };
};
