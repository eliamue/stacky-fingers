import React from 'react';
import PropTypes from 'prop-types';
import { useCreate } from '../../hooks/createResource';
import { createResource } from '../../services/apiService';
import styles from '../../components/styles/Controls.css';

const CrudController = () => {
  const {
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
  } = useCreate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
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
    await createResource(data);
  };

  return (
    <>
      <h1>Add Resource</h1>
      <form className={styles.add} onSubmit={handleSubmit}>
        <label>
          Name of Resource:
          <input
            name="src_name"
            onChange={handleName}
            placeholder="Company Inc."
            value={src_name}
          />
        </label>
        <label>
          Category:
          <select
            name="category"
            onChange={handleCategory}
            value={category}
          >
            <option value="Crisis" label="Crisis"></option>
            <option value="Mental Health" label="Mental Health"></option>
            <option value="Animal" label="Animal"></option>
            <option value="Substances" label="Substances"></option>
            <option value="Crime" label="Crime"></option>
            <option value="Domestic" label="Domestic"></option>
          </select>
        </label>

        <label>
          Brief Description of Resource:
          <textarea
            name="src_description"
            onChange={handleDescription}
            value={src_description}
            placeholder="Description of resource with services offered and population served"
          />
        </label>

        <label>
          Street Address:
          <input
            name="st_address"
            className={styles.st}
            onChange={handleAddress}
            value={st_address}
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
            name="text_num"
            onChange={handleText}
            value={text_num}
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
            name="is_24_7"
            onChange={handleIs247}
            value={is_24_7}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        <button onClick={() => {location.replace('/');}}>Submit</button>
      </form>
    </>
  );
};

CrudController.propTypes = {
  src_name: PropTypes.string,
  category: PropTypes.string,
  src_description: PropTypes.string,
  st_address: PropTypes.string,
  city: PropTypes.string,
  us_state: PropTypes.string,
  zip: PropTypes.string,
  phone: PropTypes.string,
  text_num: PropTypes.string,
  website: PropTypes.string,
  email: PropTypes.string,
  is_24_7: PropTypes.string,
};

export default CrudController;
