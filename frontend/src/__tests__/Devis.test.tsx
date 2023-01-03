import { getByTestId, render, act, fireEvent, screen, prettyDOM } from '@testing-library/react';
import React from 'react';
import Devis from '../components/Devis'
import './index.css'
import { Car } from '../models/interface';
import { car1, car2, user1 } from '../__mocks__/objectsMock'

afterEach(() => {
  jest.restoreAllMocks();
});

let cars: Car[] = [car1, car2];

describe('Devis : Integration', () => {
  it('renders correctly when passed a car array and user', () => {
    const { getByTestId } = render(<Devis user={user1} car={cars} />);
    getByTestId('render');
  });
});

describe('Devis : Mocking', () => {
  it('should mock cars with correct price', () => {
    expect(car1.price).toBe(20000);
    expect(car2.price).toBe(25000);
  });

  it('should mock cars with correct name', () => {
    expect(car1.name).toBe("Audi A3");
    expect(car2.name).toBe("Audi A4");
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
    expect(prixTTC).toBe("54000 €");
  });

  it('should contain all the cars indicated', () => {
    const el = render(<Devis user={user1} car={cars} />);
    expect(el.getByTestId('car-0')).toBeDefined();
    expect(el.getByTestId('car-1')).toBeDefined();
  });

  it('should not have an incorrect amount of rows', () => {
    const el = render(<Devis user={user1} car={cars} />);
    expect(el.container.innerHTML).toContain('car-0')
    expect(el.container.innerHTML).not.toContain('car-2')
  });
});