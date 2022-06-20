import { Address } from "./Adress";

export class User {
    public id: number = 0;
    public name: string = "";
    public lastName: string = "";
    public email: string = "";
    public address: Address[] = [];

    public constructor(init?:Partial<User>) {
        Object.assign(this, init);
    }
}