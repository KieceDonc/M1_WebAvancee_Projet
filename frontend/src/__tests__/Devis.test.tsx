import { getByTestId, render, act, fireEvent, screen, prettyDOM } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Devis from '../components/Devis'
import { car1, car2, user1 } from '../__mocks__/objectsMock'


let cars = [car1, car2];

describe('Devis : Integration', () => {
  it('affiche correctement dans le DOM quand on lui passe un tableau de voitures et un utilisateur', () => {
    const { getByTestId } = render(<Devis user={user1} car={cars} />);
    getByTestId('render');
  });
});

describe('Devis : Mocking', () => {
  it('mock une voiture avec les prix attendus', () => {
    expect(car1.price).toBe(20000);
    expect(car2.price).toBe(25000);
  });

  it('mock une voiture avec les noms attendus', () => {
    expect(car1.name).toBe("Audi A3");
    expect(car2.name).toBe("Audi A4");
  });
});

describe('Devis : Unit', () => {

  it('calcule correctement le prix HT dans le devis', () => {
    const el = render(<Devis user={user1} car={cars} />);
    let prixHT = el.getByTestId('totalpriceHT').innerHTML;
    expect(prixHT).toBe("45000 €");
  });

  it('calcule correctement le prix TTC dans le devis', () => {
    const el = render(<Devis user={user1} car={cars} />);
    let prixTTC = el.getByTestId('prixTTC').innerHTML;
    expect(prixTTC).toBe("54000 €");
  });

  it('contient les voitures attendues', () => {
    const wrapper = render(<Devis user={user1} car={cars} />);
    expect(wrapper.queryByTestId('car-0')).toBeInTheDocument();
    expect(wrapper.queryByTestId('car-1')).toBeInTheDocument();
  });

  it('n\'affiche pas d\'autres voitures que celles indiquées', () => {
    const wrapper = render(<Devis user={user1} car={cars} />);
    expect(wrapper.queryByTestId('car-2')).not.toBeInTheDocument();
    expect(wrapper.queryByTestId('car-3')).not.toBeInTheDocument();
  });
});