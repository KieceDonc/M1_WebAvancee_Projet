
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import App from '../App'
import { store } from '../app/store'
import './index.css'



test('App s\'affiche correctement', () => {

  render(<App />);

});