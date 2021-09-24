import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <header>
          <Link to="/">Back to List</Link>
          <Link to="/edit">Edit Resource</Link>
        </header>
      </div>
    );
  }
}
