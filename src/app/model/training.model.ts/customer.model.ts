export class Training {
    private name: string;
    private firstName: string;
    private address: string;
    private phone: string;
    private email: string;

    constructor(name:string,firstName:string,address:string,phone:string,email: string) {
        this.name = name;
        this.firstName = firstName;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
}