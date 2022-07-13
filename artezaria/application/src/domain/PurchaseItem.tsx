import {User} from "./User";
import {Product} from "./Product";
import {Purchase} from "./Purchase";

export enum PurchaseItemStatus {
    NAO_ENVIADO,
    ENVIADO,
    RECEBIDO
}

export class PurchaseItem {
    public _id: string = "";
    public status: number = 0;
    public user: User = new User();
    public quantitySelected: number = 0;
    public product: Product = new Product();

    public constructor(init?: Partial<PurchaseItem>) {
        Object.assign(this, init);
    }

    pickOne = () => {
        let product = new Product(this.product);
        product.quantityInStock -= 1;
        this.product = product;
        this.quantitySelected += 1;
        console.log(this);
        return this;
    }

    removeOne = () => {
        let product = new Product(this.product);
        product.quantityInStock += 1;
        this.product = product;
        this.quantitySelected -= 1;
        console.log(this);
        return this;
    }
}