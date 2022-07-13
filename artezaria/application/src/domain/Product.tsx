import {User} from "./User";

export class Product {
    _id: string = "";
    title: string = "";
    description: string = "";
    price: number = 0;
    image: string = "";
    quantityInStock: number = 0;
    // quantitySelected: number = 0;
    quantitySold: number = 0;
    artist: User = new User();

    public constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }

    isAvailable = () => this.quantityInStock > 0;
}