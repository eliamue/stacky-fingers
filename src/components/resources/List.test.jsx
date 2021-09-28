import React from 'react';
import { render, screen } from '@testing-library/react';
import ResourceList from './ResourceList.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('ResourceList', () => {
  it.only('renders resource list', async () => {
    render(<MemoryRouter><ResourceList /></MemoryRouter>);

    screen.getByAltText('Loading');
    const ul = await screen.findByRole('list');

    expect(ul).toBeInTheDocument();

    const li = screen.getByRole('link', { name: 'Tubman Family Crisis and Support Services' });
    expect(li).toMatchSnapshot();
  });
});
