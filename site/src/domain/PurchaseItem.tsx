import {User} from "./User";
import {Product} from "./Product";

export enum PurchaseItemStatus {
    NOT_SENT,
    SENT,
    RECEIVED
}

export class PurchaseItem {
    public id: number = 0;
    public user: User = new User();
    public product: Product = new Product();
    public status: number = -1;

    public constructor(init?: Partial<PurchaseItem>) {
        Object.assign(this, init);
    }
}