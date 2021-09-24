// import React from 'react';
// import Select from 'react-select';
// import PropTypes from 'prop-types';
// import { useForm, Controller } from 'react-hook-form';
// import { useCreate } from '../../hooks/createResource';
// import { createResource } from '../../services/apiService';
// import styles from '../../components/styles/Controls.css';
// import Header from '../Header';

// const CrudController = () => {
//   const { 
//     control, 
//     handleSubmit, 
//     onBlur, 
//     name,
//     category,
//     description,
//     address,
//     city,
//     us_state,
//     zip,
//     phone,
//     text,
//     website,
//     email,
//     is247,
//     handleName,
//     handleCategory,
//     handleDescription,
//     handleAddress,
//     handleCity,
//     handleZip,
//     handleUsState,
//     handlePhone,
//     handleText,
//     handleEmail,
//     handleWebsite,
//     handleIs247 } = useCreate();

//   // const onSubmit = (data) => {
//   //   console.log(data);
//   //   useCreate(data);
//   // };

//     const handleSubmit = () => {
//     const data = { name,
//     category,
//     description,
//     address,
//     city,
//     us_state,
//     zip,
//     phone,
//     text,
//     website,
//     email,
//     is247 };
//     createResource(data);
//   };

//   return (
//     <>
//       <Header />
//       <h1>Add Resource</h1>
//       <form
//         className={styles.add}
//         onSubmit={handleSubmit}>
//         <label>Name of Resource: </label>
//         <Controller
//           name="name"
//           ref={name}
//           control={control}
//           onChange={handleName}
//           defaultValue=""
//           rules={{ required: true }}
//           render={({ field }) => <input 
//             placeHolder={'Company Inc.'} 
//             onBlur={onBlur} {...field} />}
//         />
//         <label>Category: </label>
//         <Controller
//           name="category"
//           ref={category}
//           control={control}
//           onChange={handleCategory}
//           rules={{ required: true }}
//           render={({ field }) => (
//             <Select
//               {...field}
//               options={[
//                 { value: 'crisis', label: 'Crisis' },
//                 { value: 'mentalhealth', label: 'Mental Health' },
//                 { value: 'animals', label: 'Animals' },
//                 { value: 'substances', label: 'Substances' },
//                 { value: 'crime', label: 'Crime' },
//                 { value: 'domestic', label: 'Domestic' },
//               ]}
//             />
//           )}
//         />
//         <label>Brief Description of Resource: </label>
//         <Controller
//           name="description"
//           control={control}
//           ref={description}
//           defaultValue=""
//           onChange={handleDescription}
//           rules={{ required: true }}
//           render={({ field }) => <textarea placeHolder={'Description of resource with services offered and population served'} {...field} />}
//         />
//         <label>Street Address: </label>
//         <Controller
//           name="address"
//           className={styles.st}
//           control={control}
//           ref={address}
//           defaultValue=""
//           onChange={handleAddress}
//           rules={{ required: false }}
//           render={({ field }) => <input placeHolder={'123 Main St, #2'} {...field} />}
//         />
//         <label>City: </label>
//         <Controller
//           name="City"
//           control={control}
//           ref={city}
//           defaultValue=""
//           onChange={handleCity}
//           rules={{ required: false }}
//           render={({ field }) => <input placeHolder={'Anytown'} {...field} />}
//         />
//         <label>State: </label>
//         <Controller
//           name="us_state"
//           control={control}
//           ref={us_state}
//           defaultValue=""
//           onChange={handleUsState}
//           rules={{ required: true }}
//           render={({ field }) => <input placeHolder={'MN'} {...field} />}
//         />
//         <label>Zipcode: </label>
//         <Controller
//           name="zip"
//           control={control}
//           ref={zip}
//           defaultValue=""
//           onChange={handleZip}
//           rules={{ required: false }}
//           render={({ field }) => <input placeHolder={'12345'} {...field} />}
//         />
//         <label>Phone Number: </label>
//         <Controller
//           name="phone"
//           control={control}
//           defaultValue=""
//           onChange={handlePhone}
//           ref={phone}
//           rules={{ required: true }}
//           render={({ field }) => <input placeHolder={'1-800-123-4567'} {...field} />}
//         />
//         <label>Text Number: </label>
//         <Controller
//           name="text"
//           control={control}
//           defaultValue=""
//           onChange={handleText}
//           ref={text}
//           rules={{ required: false }}
//           render={({ field }) => <input placeHolder={'(612) 555-1234'} {...field} />}
//         />
//         <label>Website: </label>
//         <Controller
//           name="website"
//           control={control}
//           defaultValue=""
//           ref={website}
//           onChange={handleWebsite}
//           rules={{ required: false }}
//           render={({ field }) => <input placeHolder={'https://www.companywebsite.org'} {...field} />}
//         />
//         <label>Email Address: </label>
//         <Controller
//           name="email"
//           control={control}
//           ref={email}
//           defaultValue=""
//           onChange={handleEmail}
//           rules={{ required: false }}
//           render={({ field }) => <input placeHolder={'contact@company.org'} {...field} />}
//         />
//         <label>Is Available 24/7: </label>
//         <Controller
//           name="is247"
//           control={control}
//           ref={is247}
//           onChange={handleIs247}
//           rules={{ required: false }}
//           render={({ field }) => (
//             <Select
//               {...field}
//               options={[
//                 { value: 'true', label: 'Yes' },
//                 { value: 'false', label: 'No' },
//                 { value: 'unknown', label: 'Unknown' },
//               ]}
//             />
//           )}
//         />
        

//         <input type="submit" />
//       </form>
//     </>
//   );
// };

// CrudController.propTypes = {
//   name: PropTypes.string,
//   category: PropTypes.string,
//   description: PropTypes.string,
//   address: PropTypes.string,
//   city: PropTypes.string,
//   us_state: PropTypes.string,
//   zip: PropTypes.string,
//   phone: PropTypes.string,
//   text: PropTypes.string,
//   website: PropTypes.string,
//   email: PropTypes.string,
//   is247: PropTypes.string,

// };

// export default CrudController;
