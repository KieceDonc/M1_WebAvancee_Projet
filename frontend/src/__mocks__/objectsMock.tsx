import { Car, User } from '../models/interface';

export let user1: User = {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "test@gmail.com",
    isAdmin: true
}


export let car1: Car = {
    id: 1,
    name: "Audi A3",
    price: 20000,
    type: "Berline",
    nb_doors: 5,
    year: 2015,
    description: "Audi A3 2015"
}
export let car2: Car = {
    id: 2,
    name: "Audi A4",
    price: 25000,
    type: "Berline",
    nb_doors: 5,
    year: 2016,
    description: "Audi A4 2016"
}