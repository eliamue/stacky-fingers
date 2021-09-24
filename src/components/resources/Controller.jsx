import React from 'react';
import PropTypes from 'prop-types';
import { useCreate } from '../../hooks/createResource';
import { createResource } from '../../services/apiService';
import styles from '../../components/styles/Controls.css';

const CrudController = () => {
  const {
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
    handleIs247,
  } = useCreate();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   useCreate(data);
  // };

  const handleSubmit = () => {
    const data = {
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
    };
    createResource(data);
  };

  return (
    <>
      <h1>Add Resource</h1>
      <form className={styles.add} onSubmit={handleSubmit}>
        <label>
          Name of Resource:
          <input
            name="name"
            onChange={handleName}
            placeholder="Company Inc."
            value={name}
          />
        </label>
        <label>
          Category:
          <select
            name="category"
            onChange={handleCategory}
            value={category}
          >
            <option value="crisis" label="Crisis"></option>
            <option value="mentalhealth" label="Mental Health"></option>
            <option value="animals" label="Animals"></option>
            <option value="substances" label="Substances"></option>
            <option value="crime" label="Crime"></option>
            <option value="domestic" label="Domestic"></option>
          </select>
        </label>

        <label>
          Brief Description of Resource:
          <textarea
            name="description"
            onChange={handleDescription}
            value={description}
            placeholder="Description of resource with services offered and population served"
          />
        </label>

        <label>
          Street Address:
          <input
            name="address"
            className={styles.st}
            onChange={handleAddress}
            value={address}
            placeholder="123 Main St, #2"
          />
        </label>

        <label>
          City:
          <input
            name="City"
            onChange={handleCity}
            value={city}
            placeholder="Anytown"
          />
        </label>

        <label>
          State:
          <input
            name="us_state"
            onChange={handleUsState}
            value={us_state}
            placeholder="MN"
          />
        </label>

        <label>
          Zipcode:
          <input
            name="zip"
            onChange={handleZip}
            value={zip}
            placeholder="12345"
          />
        </label>

        <label>
          Phone Number:
          <input
            name="phone"
            onChange={handlePhone}
            value={phone}
            placeholder="1-800-123-4567"
          />
        </label>

        <label>
          Text Number:
          <input
            name="text"
            onChange={handleText}
            value={text}
            placeholder="(612) 555-1234"
          />
        </label>

        <label>
          Website:
          <input
            name="website"
            onChange={handleWebsite}
            value={website}
            placeholder="https://www.companywebsite.org"
          />
        </label>

        <label>
          Email Address:
          <input
            name="email"
            onChange={handleEmail}
            value={email}
            placeholder="contact@company.org"
          />
        </label>

        <label>
          Is Available 24/7:
          <select
            name="is247"
            onChange={handleIs247}
            value={is247}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        <button onClick={() => {
          window.redirect('/');}}>Submit</button>
      </form>
    </>
  );
};

CrudController.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  us_state: PropTypes.string,
  zip: PropTypes.string,
  phone: PropTypes.string,
  text: PropTypes.string,
  website: PropTypes.string,
  email: PropTypes.string,
  is247: PropTypes.string,
};

export default CrudController;
