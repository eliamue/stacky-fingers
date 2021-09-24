import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';

describe('App', () => {
  it('renders app', () => {
    render(<div>Hello World</div>);

    const app = screen.getByText('Hello World');
    expect(app).not.toBeEmptyDOMElement();
  });
});
