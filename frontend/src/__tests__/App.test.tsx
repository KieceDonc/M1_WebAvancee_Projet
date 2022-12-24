import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../App';

const mockStore = configureStore();

test('MyComponent is rendered within a provider', () => {
  const store = mockStore({});
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = getByText('Login');
  expect(element).toBeInTheDocument();
});