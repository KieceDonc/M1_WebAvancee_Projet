import { getByTestId, render, findByTestId, act, fireEvent, screen, prettyDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { store } from '../__mocks__/storeMock'
import { BrowserRouter as Router } from 'react-router-dom';


import Header from '../components/Header';
import Cart from '../pages/Cart';
import { user1 } from '../__mocks__/objectsMock';
import { car1, car2 } from '../__mocks__/objectsMock'

const renderComponent = () => {
    return render(
        <Router>
            <Provider store={store}>
                <Cart />
            </Provider>
        </Router>
    );
};

describe('Cart : Integration', () => {
    it('affiche le panier au sein du composant', () => {
        const wrapper = renderComponent();
    })
})

describe('Header : Integration', () => {
    it("calcule le prix de deux voitures", () => {
        const cars = [car1, car2];
        localStorage.setItem('cars', JSON.stringify(cars));
        const wrapper = renderComponent();
    })
})