export class CreditCard {
    public name: string = "";
    public expiryDate: string = "";
    public number: number = 0;
    public cvv: number = 0;

    public constructor(init?:Partial<CreditCard>) {
        Object.assign(this, init);
    }
}