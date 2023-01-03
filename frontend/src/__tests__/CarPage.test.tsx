import { getByTestId, render, act, fireEvent, screen, prettyDOM } from '@testing-library/react';
import React from 'react';
import CarPage from '../pages/CarPage'


import { Provider } from 'react-redux';
import { store } from '../__mocks__/storeMock'
import { BrowserRouter, Router, Routes, Route, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from "history";


const renderComponent = () => {
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/carPage/1"]}>
                <Routes>
                    <Route path="carPage/:id" element={<CarPage />} />
                </Routes>
            </MemoryRouter>
        </Provider>
    );
};

describe('CarPage : Integration', () => {
    it('affiche la page au sein de l\'app', () => {
        const wrapper = renderComponent();
    })
})

describe('CarPage : E2E', () => {
    it('ajoute au panier sur clic du bouton', () => {
        const wrapper = renderComponent();
        const button = screen.getByTestId('addtocart-button');
        expect(localStorage.getItem('cars')).toBe(null);
        fireEvent.click(button);
        const cartStep1 = localStorage.getItem('cars')
        expect(cartStep1).not.toBe(null);

    })

    it('ajoute de deux voitures au panier sur clic du bouton', () => {
        const wrapper = renderComponent();
        const button = screen.getByTestId('addtocart-button');
        localStorage.removeItem('cars');

        expect(localStorage.getItem('cars')).toBe(null);
        fireEvent.click(button);
        const cartStep1 = localStorage.getItem('cars')
        expect(cartStep1).not.toBe(null);
        fireEvent.click(button);
        if (cartStep1 !== null)
            expect(localStorage.getItem('cars')?.length).toBeGreaterThan(cartStep1.length);

    })
})

