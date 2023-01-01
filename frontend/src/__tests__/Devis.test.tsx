
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { getByTestId, render, act, fireEvent, screen, prettyDOM } from '@testing-library/react';
import Catalogue from '../pages/Catalogue';

import ReactDOM from 'react-dom/client'
import React from 'react';
import Devis from '../components/Devis'
import { store } from '../app/store'
import './index.css'
import { Car, User } from '../models/interface';
import { car1, car2, user1 } from '../__mocks__/objectsMock'

afterEach(() => {
  jest.restoreAllMocks();
});

let cars: Car[] = [car1, car2];

describe('Devis : Integration', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Devis user={user1} car={cars} />);
    getByTestId('render');
  });
});

describe('Devis : Unit', () => {

  it('should get the correct HT price', () => {
    const el = render(<Devis user={user1} car={cars} />);
    let prixHT = el.getByTestId('totalpriceHT').innerHTML;
    expect(prixHT).toBe("45000 €");
  });

  it('should get the correct TTC price', () => {
    const el = render(<Devis user={user1} car={cars} />);
    let prixTTC = el.getByTestId('prixTTC').innerHTML;
    //expect(prixTTC).toBe("54000 €");
  });
});