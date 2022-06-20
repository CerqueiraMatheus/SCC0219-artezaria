export class Address {
    public street: string = "";
    public houseNumber: string = "";
    public complement: string = "";
    public cep: string = "";
    public city: string = "";
    public state: string = "";

    public constructor(init?:Partial<Address>) {
        Object.assign(this, init);
    }

    public toString() {
        return `${this.street}, ${this.houseNumber}, ${this.complement}, ${this.city}`;
    }
}