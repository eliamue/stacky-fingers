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

  const handleSubmit = async () => {
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
    history.push('/');
  };

  return (
    <>
      <h1>Add Resource</h1>
      <p className={styles.req}>* Is Required</p>
      <form className={styles.add} onSubmit={handleSubmit}>
        <label>
          <div className={styles.instruction}>
            <h4 className={styles.req}>*</h4>
            <h4>Name of Resource: </h4>
          </div>
          <input
            name="src_name"
            onChange={handleName}
            placeholder="Company Inc."
            value={src_name}
            required
          />
        </label>
        <label>
          <div className={styles.instruction}>
            <h4 className={styles.req}>*</h4>
            <h4>Category: </h4>
          </div>
          <select
            name="category"
            onChange={handleCategory}
            value={category}
            required
          >
            <option value="" selected disabled>--</option>
            <option value="Crisis" label="Crisis"></option>
            <option value="Mental Health" label="Mental Health"></option>
            <option value="Animal" label="Animal"></option>
            <option value="Substances" label="Substances"></option>
            <option value="Crime" label="Crime"></option>
            <option value="Domestic" label="Domestic"></option>
          </select>
        </label>

        <label>
          <div className={styles.instruction}>
            <h4 className={styles.req}>*</h4>
            <h4>Description: </h4>
          </div>
          <textarea
            name="src_description"
            onChange={handleDescription}
            value={src_description}
            required
            placeholder="Description of resource, including services offered and population served"
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
          <div className={styles.instruction}>
            <h4 className={styles.req}>*</h4>
            <h4>City: </h4>
          </div>
          <input
            name="City"
            onChange={handleCity}
            value={city}
            placeholder="Anytown"
            required
          />
        </label>

        <label>
          <div className={styles.instruction}>
            <h4 className={styles.req}>*</h4>
            <h4>State: </h4>
          </div>
          <input
            name="us_state"
            onChange={handleUsState}
            value={us_state}
            placeholder="MN"
            required
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
          <div className={styles.instruction}>
            <h4 className={styles.req}>*</h4>
            <h4>Phone Number: </h4>
          </div>
          <input
            name="phone"
            onChange={handlePhone}
            value={phone}
            placeholder="1-800-123-4567"
            required
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
          Is this resource available 24/7:     
          <select
            name="is_24_7"
            onChange={handleIs247}
            value={is_24_7}
          >
            <option value="" selected disabled>--</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unknown">Unknown</option>
          </select>
        </label>
        <button type="submit">Submit</button>
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
