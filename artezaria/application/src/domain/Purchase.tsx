import {User} from "./User";
import {PurchaseItem} from "./PurchaseItem";

export class Purchase {
    public _id: string = "";
    public user: User = new User();
    public date: Date = new Date();
    public items: PurchaseItem[] = [];
    public total: number = 0;

    public constructor(init?: Partial<Purchase>) {
        Object.assign(this, init);
    }
}