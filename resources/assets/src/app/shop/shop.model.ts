export class Shop {
    nameProd:string;
    priceProd:string;
    source1Prod:string;
    source2Prod:string;
    constructor(public name, public price, public source1, public source2) {
        this.nameProd = name;
        this.priceProd = price;
        this.source1Prod = source1;
        this.source2Prod = source2;
    }
}
