import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Resource.css';

const Resource = ({ name, category, city, state, description }) => (
  <section className={styles.resource}>
    <h2 className={styles.srcName}>{name}</h2>
    <h3 className={styles.category}>Category: {category}</h3>
    <h4 className={styles.location}>{city}, {state}</h4>
    <p className={styles.description}>{description}</p>
  </section>
);

Resource.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  description: PropTypes.string,
};

export default Resource;
