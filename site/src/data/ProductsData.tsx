import {Product} from "../domain/Product";
import {userArtist, userArtist2} from "./UserData";

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg/800px-Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg';

// Fake products data
export let PRODUCTS = [
    new Product({
        id: 1,
        title: "Produto 1",
        description: "Descrição 1",
        quantityInStock: 2,
        price: 2,
        image: url,
        artist: userArtist
    }),
    new Product({
        id: 2,
        title: "Produto 2",
        description: "Descrição 2",
        quantityInStock: 0,
        price: 2,
        image: url,
        artist: userArtist2
    }),
    new Product({
        id: 3,
        title: "Produto 3",
        description: "Descrição 3",
        quantityInStock: 4,
        price: 2,
        image: url,
        artist: userArtist
    }),

    new Product({
        id: 3,
        title: "Produto 3",
        description: "Descrição 3",
        quantityInStock: 4,
        price: 2,
        image: url,
        artist: userArtist
    })
];