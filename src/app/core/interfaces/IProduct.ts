
export interface IProduct{
    name:string;
    description:string;
    category:string[]
    solde_price:number;
    regular_price:number;
    imageUrl:string;
    created_at:Date;
    updated_at?:Date
}
