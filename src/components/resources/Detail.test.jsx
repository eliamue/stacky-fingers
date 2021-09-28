import React from 'react';
import { render, screen } from '@testing-library/react';
import ResourceDetail from './ResourceDetail.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('ResourceDetail', () => {
  it('renders resource detail page', async () => {
    render(
      <MemoryRouter initialEntries={['/3']}>
        <ResourceDetail
          match={{
            params: {
              id: '3',
            },
          }}
        />
      </MemoryRouter>
    );

    const buttons = await screen.findAllByRole('button', { timeout: 4000 });
    expect(buttons).toMatchSnapshot();

  });
});
