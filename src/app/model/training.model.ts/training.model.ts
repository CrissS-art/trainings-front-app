export class Training {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public quantity: number;

    constructor(id:number,name:string,description:string,price:number,quantity:number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}