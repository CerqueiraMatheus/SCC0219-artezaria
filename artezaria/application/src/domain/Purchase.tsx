import {User} from "./User";

export class Purchase {
    public _id: string = "";
    public user: User = new User();
    public date: Date = new Date();
    public total: number = 0;

    public constructor(init?: Partial<Purchase>) {
        Object.assign(this, init);
    }
}