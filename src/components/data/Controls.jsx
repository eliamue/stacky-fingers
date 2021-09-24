// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from '../styles/Controls.css';

// const Controls = ({ handleChange, handleSubmit, handleUpdate, handleCreate, handleDelete }) => {
//   return (
//     <>
//       <form 
//         data-testid="controls-form"
//         onSubmit={handleSubmit}
//         className={styles.Controls}
//       >
//         <section>
//           <label htmlFor="PUT">UPDATE EXISTING RESOURCE</label>
//           <input 
//             type="radio"
//             name="route" 
//             id="put"
//             value="PUT"
//             onChange={handleChange}
//             onSubmit={handleUpdate}
//             className={styles.routes}
//           />
//           <label htmlFor="POST">ADD NEW RESOURCE</label>
//           <input 
//             type="radio"
//             name="route" 
//             id="post"
//             value="POST"
//             onChange={handleChange}
//             onSubmit={handleCreate}
//             className={styles.routes}
//           />
//           <label htmlFor="DELETE">DELETE RESOURCE</label>
//           <input 
//             type="radio"
//             name="route" 
//             id="delete"
//             value="DELETE"
//             onChange={handleChange}
//             onSubmit={handleDelete}
//             className={styles.routes}
//           />
//           <button aria-label="submit-request">Submit Request</button>
//         </section>
        
//       </form>
//     </>
//   );
// };

// Controls.propTypes = {
//   route: PropTypes.string,
//   handleChange: PropTypes.func,
//   handleSubmit: PropTypes.func,
//   handleCreate: PropTypes.func,
//   handleUpdate: PropTypes.func,
//   handleDelete: PropTypes.func
// };

// export default Controls;
