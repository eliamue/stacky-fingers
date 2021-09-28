import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <nav>
          <Link to="/"><h1 className={styles.title}>Emergency Resources</h1></Link>
          <Link to="/add" className={styles.add}><h5>Add Resource</h5></Link>
        </nav>
      </div>
    );
  }
}
