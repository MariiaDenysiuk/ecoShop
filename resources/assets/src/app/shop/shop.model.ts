export class Shop {
    id: number;
    nameProd:string;
    priceProd:number;
    source1Prod:string;
    source2Prod:string;
    numb;
    sumProd;
    sumPrise;
    constructor(public index, public name, public price, public source1, public source2, public numbe, public sum1, public sum2) {
        this.id = index;
        this.nameProd = name;
        this.priceProd = price;
        this.source1Prod = source1;
        this.source2Prod = source2;
        this.numb = numbe;
        this.sumProd = sum1;
        this.sumPrise = sum2;
    }
}
