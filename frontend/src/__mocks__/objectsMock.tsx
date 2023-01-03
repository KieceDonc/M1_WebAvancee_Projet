import { Car, User } from '../models/interface'

export let user1: User = {
  id: 1,
  first_name: 'John',
  last_name: 'Doe',
  email: 'test@gmail.com',
  isAdmin: true,
}

export let car1: Car = {
  id: 1,
  name: 'Audi A3',
  price: 20000,
  type: 'Berline',
  nb_doors: 5,
  year: 2015,
  description: 'Audi A3 2015',
}

export let car2: Car = {
  id: 2,
  name: 'Audi A4',
  price: 25000,
  type: 'Berline',
  nb_doors: 5,
  year: 2016,
  description: 'Audi A4 2016',
}

export const mockCarData = {
  dataCar: {
    '27': {
      id: 27,
      name: 'Maruti 800 AC',
      price: '60000',
      type: 'Citadine',
      nb_doors: 5,
      year: 2007,
      description: 'Description Maruti 800 AC',
    },
    '28': {
      id: 28,
      name: 'Renault KWID RXT',
      price: '315000',
      type: 'SUV',
      nb_doors: 5,
      year: 2017,
      description: 'Description Renault KWID RXT',
    },
    '29': {
      id: 29,
      name: 'Ford Figo Diesel Titanium',
      price: '170000',
      type: 'Familiale',
      nb_doors: 5,
      year: 2010,
      description: 'Description Ford Figo Diesel Titanium',
    },
    '30': {
      id: 30,
      name: 'Audi Q8 Etron',
      price: '86700',
      type: 'SUV',
      nb_doors: 5,
      year: 2022,
      description: 'Description Audi Q8 Etron',
    },
    '1': {
      id: 1,
      name: 'Chevrolet Camaro',
      price: '74995',
      type: 'Sportive',
      nb_doors: 4,
      year: 2018,
      description: 'Description Chevrolet Camaro',
    },
    '2': {
      id: 2,
      name: 'Ford Mustang',
      price: '25000',
      type: 'Sportive',
      nb_doors: 4,
      year: 2018,
      description: 'Description Ford Mustang',
    },
    '3': {
      id: 3,
      name: 'Dodge Challenger',
      price: '18000',
      type: 'Sportive',
      nb_doors: 4,
      year: 2018,
      description: 'Description Dodge Challenger',
    },
  },
}

export const mockCarPic = {
  '27': {
    idCar: 27,
    srcPicturesCar: 'Maruti_800_ac.jpg',
  },
  '28': {
    idCar: 28,
    srcPicturesCar: 'Renault_Kwid_RXT.jpg',
  },
  '29': {
    idCar: 29,
    srcPicturesCar: 'Ford_Figo_Diesel_Titanium.jpg',
  },
  '30': {
    idCar: 30,
    srcPicturesCar: 'Audi_Q8_Etron.jpg',
  },
  '1': {
    idCar: 1,
    srcPicturesCar: 'Chevrolet_Camaro.jpg',
  },
  '2': {
    idCar: 2,
    srcPicturesCar: 'Ford_Mustang.jpg',
  },
  '3': {
    idCar: 3,
    srcPicturesCar: 'Dodge_Challenger.jpg',
  },
}

export const mockCarType = ['Sportive', 'SUV', 'Familiale', 'Citadine']

export const mockCarTabData = Object.values(mockCarData.dataCar)
