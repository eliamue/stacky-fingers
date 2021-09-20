import React from 'react';
import { useOneResource } from '../../hooks/useOneResource';
import styles from '../../styles/Detail.css';
import { useParams } from 'react-router-dom';
import Header from '../Header';

const spinner = 'https://i.redd.it/o6m7b0l6h6pz.gif';

const { always } = '*Available 24/7';

const Detail = () => {
  const { id } = useParams();
  const { loading, resource } = useOneResource(id);
  const {
    name,
    category,
    description,
    address,
    city,
    state,
    zip,
    phone,
    text,
    website,
    email,
    is247,
  } = resource;
  if (loading) return <img src={spinner} alt="Loading" />;
  if (is247)
    return (
      always,
      (
        <>
          <Header />
          <figure className={styles.srcdeets}>
            <h1>{name}</h1>
            <h3>{category}</h3>
            <section className={styles.location}>
              {' '}
              Location:
              <p>{address}</p>
              <p>
                {city}, {state} {zip}
              </p>
            </section>
            <p className={styles.desc}>{description}</p>

            <section className={styles.contact}>
              <p>Phone number: {phone}</p>
              <p>Text number: {text}</p>
              <a href src={website} alt={name}>
                Website
              </a>
              <p>{email}</p>
            </section>
          </figure>
        </>
      )
    );
};

export default Detail;
