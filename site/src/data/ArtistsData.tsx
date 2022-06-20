import {Artist} from "../domain/Artist";

export const artistA = new Artist({id: 3, name: "Van Gogh", description: "Batata"});
export const artistB = new Artist({id: 4, name: "Edvard Munch", description: "Batata"});
export const artistC = new Artist({id: 5, name: "Mestre Vitalino", description: "Batata"});

// Fake artists data
export const artists = [
    artistA, artistB, artistC
];