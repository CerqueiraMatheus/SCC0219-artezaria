import {Product} from "../domain/Product";
import {userArtist, userArtist2} from "./UserData";

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg/800px-Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg';

export const productA = new Product({
    _id: "1",
    title: "Produto 1",
    description: "Descrição 1",
    quantityInStock: 2,
    price: 2,
    image: url,
    artist: userArtist
});

export const productB = new Product({
    _id: "2",
    title: "Produto 2",
    description: "Descrição 2",
    quantityInStock: 2,
    price: 2,
    image: url,
    artist: userArtist2
});

export const productC = new Product({
    _id: "3",
    title: "Produto 3",
    description: "Descrição 3",
    quantityInStock: 4,
    price: 2,
    image: url,
    artist: userArtist
});

export const productD = new Product({
    _id: "4",
    title: "Produto 4",
    description: "Descrição 4",
    quantityInStock: 4,
    price: 2,
    image: url,
    artist: userArtist
});


export const productE = new Product({
    _id: "5",
    title: "Produto 5",
    description: "Descrição 5",
    quantityInStock: 0,
    price: 3,
    image: url,
    artist: userArtist2
});

// Fake products data
export let PRODUCTS = [productA, productB, productC, productD, productE];