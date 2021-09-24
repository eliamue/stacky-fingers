import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { useCreate } from '../../hooks/createResource';
import { createResource } from '../../services/apiService';
import styles from '../../components/styles/Controls.css';
import Header from '../Header';

const CrudController = ({ src_name }) => {
  const { control, handleSubmit, onBlur } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    useCreate(data);
  };

  return (
    <>
      <Header />
      <h1>Add Resource</h1>
      <form
        className={styles.add}
        ref={createResource}
        onSubmit={handleSubmit(onSubmit)}>
        <label>Name of Resource: </label>
        <Controller
          name="Name"
          ref={src_name}
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input 
            placeHolder={'Company Inc.'} 
            onBlur={onBlur} {...field} />}
        />
        <label>Category: </label>
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: 'crisis', label: 'Crisis' },
                { value: 'mentalhealth', label: 'Mental Health' },
                { value: 'animals', label: 'Animals' },
                { value: 'substances', label: 'Substances' },
                { value: 'crime', label: 'Crime' },
                { value: 'domestic', label: 'Domestic' },
              ]}
            />
          )}
        />
        <label>Brief Description of Resource: </label>
        <Controller
          name="Description"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <textarea placeHolder={'Description of resource with services offered and population served'} {...field} />}
        />
        <label>Street Address: </label>
        <Controller
          name="Address"
          className={styles.st}
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => <input placeHolder={'123 Main St, #2'} {...field} />}
        />
        <label>City: </label>
        <Controller
          name="City"
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => <input placeHolder={'Anytown'} {...field} />}
        />
        <label>State: </label>
        <Controller
          name="State"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input placeHolder={'MN'} {...field} />}
        />
        <label>Zipcode: </label>
        <Controller
          name="Zipcode"
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => <input placeHolder={'12345'} {...field} />}
        />
        <label>Phone Number: </label>
        <Controller
          name="Phone"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input placeHolder={'1-800-123-4567'} {...field} />}
        />
        <label>Text Number: </label>
        <Controller
          name="Text"
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => <input placeHolder={'(612) 555-1234'} {...field} />}
        />
        <label>Website: </label>
        <Controller
          name="Website"
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => <input placeHolder={'https://www.companywebsite.org'} {...field} />}
        />
        <label>Email Address: </label>
        <Controller
          name="Email"
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => <input placeHolder={'contact@company.org'} {...field} />}
        />
        <label>Is Available 24/7: </label>
        <Controller
          name="is247"
          control={control}
          rules={{ required: false }}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: 'true', label: 'Yes' },
                { value: 'false', label: 'No' },
                { value: 'unknown', label: 'Unknown' },
              ]}
            />
          )}
        />
        

        <input type="submit" />
      </form>
    </>
  );
};

CrudController.propTypes = {
  src_name: PropTypes.string
};

export default CrudController;
