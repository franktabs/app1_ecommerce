import { IProduct } from "../interfaces/IProduct";
import { Model } from "./Model";

export class Product extends Model{

    constructor(public attr:IProduct){
        super();
    }

    override clone(): Model {
        let productJson:Product = JSON.parse(JSON.stringify(this));
        let product = new Product(productJson.attr);
        return product;
    }
}
