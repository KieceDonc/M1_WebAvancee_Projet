
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { getByTestId, render, act} from '@testing-library/react';
import Catalogue from '../pages/Catalogue';

import ReactDOM from 'react-dom/client'
import React from 'react';
import Devis from '../components/Devis'
import { store } from '../app/store'
import './index.css'
import { Car, User } from '../models/interface';
import * as html2pdf from 'html2pdf.js'

import { shallow } from 'enzyme';

test('Devis s\'affiche correctement', () => {

  let user1:User = {
    id:1,
    first_name:"John",
    last_name:"Doe",
    email:"test@gmail.com",
    isAdmin:true
  }

  let car1:Car = {
    id: 1,
    name: "Audi A3",
    price: 20000,
    type: "Berline",
    nb_doors: 5,
    year: 2015,
    description: "Audi A3 2015"
  }
  let car2:Car = {
    id: 2,
    name: "Audi A4",
    price: 25000,
    type: "Berline",
    nb_doors: 5,
    year: 2016,
    description: "Audi A4 2016"
  }
  let cars:Car[] = [car1, car2];
  render(<Devis user={user1} car={cars} />);
    

    
});