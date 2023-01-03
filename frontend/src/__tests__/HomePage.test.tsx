import { getByTestId, render, act, fireEvent, screen, prettyDOM } from '@testing-library/react';
import React from 'react';
import HomePage from '../pages/HomePage'

import { Provider } from 'react-redux';
import { store } from '../__mocks__/storeMock'
import { BrowserRouter as Router } from 'react-router-dom';

// function that renders the component
const renderComponent = () => {
    return render(
        <Router>
            <Provider store={store}>
                <HomePage />
            </Provider>
        </Router>
    );
};

describe('HomePage : Integration', () => {
    it('should render homepage ', () => {
        const container = renderComponent();
    })

    it('should display welcome message to user', () => {
        const { getByText } = renderComponent();
        const element = getByText('Bienvenue chez Otto Moto');
        expect(element.textContent).toBe('Bienvenue chez Otto Moto');
    })



});

