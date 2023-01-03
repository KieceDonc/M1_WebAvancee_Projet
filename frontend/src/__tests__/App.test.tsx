
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import App from '../App'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import { car1, car2, user1 } from '../__mocks__/objectsMock'
import mockCardata from '../__mocks__/cardataMock'
import Catalogue from '../pages/Catalogue';
import { store } from '../__mocks__/storeMock'

describe('App : Integration', () => {
  it("should render App", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});