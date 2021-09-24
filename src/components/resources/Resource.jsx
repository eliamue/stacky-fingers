import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Resource.css';
import { Link } from 'react-router-dom';

const Resource = ({ id, src_name, category, city, us_state, src_description }) => (
  <section className={styles.resource}>
    <Link to={`/${id}`}>
      <h2 className={styles.srcName}>{src_name}</h2>
    </Link>
    <h3 className={styles.category}>Category: {category}</h3>
    <h4 className={styles.location}>{city}, {us_state}</h4>
    <p className={styles.description}>{src_description}</p>
  </section>
);

Resource.propTypes = {
  id: PropTypes.string,
  src_name: PropTypes.string,
  category: PropTypes.string,
  city: PropTypes.string,
  us_state: PropTypes.string,
  src_description: PropTypes.string,
};

export default Resource;
