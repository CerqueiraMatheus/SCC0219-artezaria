import {Artist} from "./Artist";

export class Product {
    id: number = 0;
    title: string = "";
    description: string = "";
    price: number = 0;
    image: string = "";
    quantityInStock: number = 0;
    quantitySelected: number = 0;
    artist: Artist = new Artist();

    public constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }

    isAvailable = () => this.quantityInStock > 0;

    pickOne = () => {
        this.quantityInStock -= 1;
        this.quantitySelected += 1;
        console.log(this);
        return this;
    }

    removeOne = () => {
        this.quantityInStock += 1;
        this.quantitySelected -= 1;
        console.log(this);
        return this;
    }
}