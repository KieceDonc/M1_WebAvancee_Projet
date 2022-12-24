import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Test render de App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("login");
  expect(linkElement).toBeInTheDocument();
});