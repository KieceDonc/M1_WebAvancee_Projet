
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { getByTestId, render } from '@testing-library/react';
import Catalogue from '../pages/Catalogue';

import ReactDOM from 'react-dom/client'
import React from 'react';
import App from '../App'
import { store } from '../app/store'
import './index.css'

test('App s\'affiche correctement', () => {

  const element = render(
      <Provider store={store}>
          <App />
      </Provider>
  );

  expect(element).toHaveTextContent('Login');


});