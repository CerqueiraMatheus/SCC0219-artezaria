import {User} from "./User";

export class Product {
    id: number = 0;
    title: string = "";
    description: string = "";
    price: number = 0;
    image: string = "";
    quantityInStock: number = 0;
    quantitySelected: number = 0;
    quantitySold: number = 0;
    artist: User = new User();

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