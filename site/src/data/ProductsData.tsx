import {Product} from "../domain/Product";
import {artistA, artistB, artistC} from "./ArtistsData";

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg';

// Fake products data
export let products = [
    new Product({id: 1, title: "Produto 1", description: "Descrição 1", quantityInStock: 2, price: 2, image: url, artist: artistA}),
    new Product({id: 2, title: "Produto 2", description: "Descrição 2", quantityInStock: 0, price: 2, image: url, artist: artistB}),
    new Product({id: 3, title: "Produto 3", description: "Descrição 3", quantityInStock: 4, price: 2, image: url, artist: artistC}),
];