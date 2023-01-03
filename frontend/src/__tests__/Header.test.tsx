import { getByTestId, render, findByTestId, act, fireEvent, screen, prettyDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { store } from '../__mocks__/storeMock'
import { BrowserRouter as Router } from 'react-router-dom';


import Header from '../components/Header';
import App from '../App';
import { user1 } from '../__mocks__/objectsMock';

const renderComponent = () => {
    return render(
        <Router>
            <Provider store={store}>
                <Header />
            </Provider>
        </Router>
    );
};

describe('Header : Integration', () => {
    it('montre le header avec un bouton connexion et s\'enregistrer si l\'utilisateur est déconnecté ', () => {
        const wrapper = renderComponent();
        // Recherche du bouton de connexion et d'enregistrement qui doivent être présents
        expect(wrapper.queryByTestId('login-button')).toBeInTheDocument();
        expect(wrapper.queryByTestId('register-button')).toBeInTheDocument();
        // Recherche du bouton de déconnexion qui ne doit pas être présent
        expect(wrapper.queryByTestId('logout-button')).not.toBeInTheDocument();

    })

    it('montre le header avec un bouton deconnexion si l\'utilisateur est connecté', () => {
        // Mise en place de l'utilisateur dans le localStorage pour simuler la connexion
        localStorage.setItem('user-info', JSON.stringify(user1));

        const wrapper = renderComponent();
        // Recherche du bouton de connexion et d'enregistrement qui ne doivent pas être présents
        expect(wrapper.queryByTestId('login-button')).not.toBeInTheDocument();
        expect(wrapper.queryByTestId('register-button')).not.toBeInTheDocument();
        // Recherche du bouton de déconnexion qui doit être présent
        expect(wrapper.queryByTestId('logout-button')).toBeInTheDocument();
    })

    it('montre le bouton catalogue', () => {
        const wrapper = renderComponent();
        // Recherche du bouton catalogue qui doit être présent
        expect(wrapper.queryByTestId('catalogue-button')).toBeInTheDocument();
    })

    it('montre le bouton panier', () => {
        const wrapper = renderComponent();
        // Recherche du bouton panier qui doit être présent
        expect(wrapper.queryByTestId('cart-button')).toBeInTheDocument();
    })

});

describe('Header : E2E', () => {
    it('change le lien pour {...}/catalogue au clic du bouton', () => {
        const wrapper = renderComponent();
        const button = screen.getByTestId('catalogue-button');

        expect(global.window.location.href).toBe('http://localhost/')
        fireEvent.click(button);
        expect(global.window.location.href).toBe('http://localhost/Catalogue');
    })

    it('déconnecte l\'utilisateur au clic du bouton de déconnexion', () => {
        // Mise en place de l'utilisateur dans le localStorage pour simuler la connexion
        localStorage.setItem('user-info', JSON.stringify(user1));

        const wrapper = renderComponent();
        const button = screen.getByTestId('logout-button');
        expect(localStorage.getItem('user-info')).not.toBe(null);
        fireEvent.click(button);
        expect(localStorage.getItem('user-info')).toBe(null);
    })
})