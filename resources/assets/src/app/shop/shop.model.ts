export class Shop {
    id: number;
    nameProd: string;
    priceProd: number;
    source1Prod: string;
    source2Prod: string;
    numb;
    sumProd :number;
    sumPrise :number;
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
//
// export class Shop {
//     id: number;
//     name: string;
//     vendorCode: number;
//     price: number;
//     count: number;
//     img1: string;
//     img2: string;
//     description: string;
//     shortDescription: string;
//     created_at: any;
//     updated_at: any;
//     numb;
//     sumProd :number;
//     sumPrise :number;
//     constructor(public index, public title, public code,
//                 public sell, public quantity, public img,
//                 public previewImg, public desc, public sDesc,
//                 public created, public updated,
//                 public numbe, public sum1, public sum2){
//         this.id = index;
//         this.name = title;
//         this.vendorCode = code;
//         this.price = sell;
//         this.count = quantity;
//         this.img1 = img;
//         this.img2 = previewImg;
//         this.description = desc;
//         this.shortDescription = sDesc;
//         this.created_at = created;
//         this.updated_at = updated;
//         this.numb = numbe;
//         this.sumProd = sum1;
//         this.sumPrise = sum2;
//     }
//
// }
