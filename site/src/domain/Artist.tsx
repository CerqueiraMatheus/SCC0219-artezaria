export class Artist {
    public id: number = 0;
    public name: string = "";
    public description: string = "";

    public constructor(init?:Partial<Artist>) {
        Object.assign(this, init);
    }
}