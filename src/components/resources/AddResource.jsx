import React, { Component } from 'react';
import { createResource, deleteResource, fetchOneResource, updateResource } from '../../services/apiService';

export default class AddContainer extends Component {
  state = {
    src_name: '',
    category: '',
    src_description: '',
    st_address: '',
    city: '',
    zip: '',
    us_state: '',
    phone: '',
    text_num: '',
    website: '',
    email: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    
  };

  handleCreate = (event) => {
    event.preventDefault();
    createResource(event);
  }

  handleUpdate= (event) => {
    event.preventDefault();
    updateResource(event);
  }

  handleDelete = (event) => {
    event.preventDefault();
    deleteResource(event);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
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
    } = this.state;

    await fetchOneResource(
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
      email
    );
  };

  render() {
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
    } = this.state;

    return (
      <div className="detail">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name of Business/Resource:
            <input
              value={name}
              placeholder="ex. People First Mental Health Services"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Category:
            <select value={category} onChange={this.handleChange}>
              <option value="1">Crisis</option>
              <option value="2">Mental Health</option>
              <option value="3">Domestic</option>
              <option value="4">Animal</option>
              <option value="5">Substance Use</option>
              <option value="6">Crime</option>
            </select>
          </label>
          <label>
            Description of Resource:
            <input
              type="textarea"
              value={description}
              style={{ height: 100 }}
              placeholder="ex. 24/7 crisis line for domestic violence support"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Street Address:
            <input
              type="address"
              value={address}
              placeholder="1234 Main St, Ste #12"
              onChange={this.handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              value={city}
              placeholder="Anytown"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Zip Code:
            <input
              type="text"
              value={zip}
              placeholder="12345"
              onChange={this.handleChange}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              value={state}
              placeholder="MN"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phone}
              placeholder="1-800-555-1234"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Text Number:
            <input
              type="tel"
              value={text}
              placeholder="651-555-1234"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Resource Website:
            <input
              type="url"
              value={website}
              placeholder="http://www.yourwebsite.org"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Resource Email:
            <input
              type="email"
              value={email}
              placeholder="contactus@business.org"
              onChange={this.handleChange}
            />
          </label>
          <button>Add Resource</button>
        </form>
      </div>
    );
  }
}
