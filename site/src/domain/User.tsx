import {CreditCard} from "./CreditCard";

export enum UserTypes {
    CLIENT,
    ARTIST,
    ADMIN
}

export class User {
    public id: number = 0;
    public name: string = "";
    public lastName: string = "";
    public email: string = "";
    public password: string = "";
    public address: string = "";
    public description: string = "";
    public type: number = 0;
    public creditCard: CreditCard = new CreditCard();

    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}