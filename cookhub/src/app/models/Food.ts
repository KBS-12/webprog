export class Food{
    id!:number;
    name!:string;
    price!:number;
    cookingtime!:number;
    ingredientsquantity!:string;
    preparation?:string;
    imageUrl!:string; 
    difficulty!:string;
    tags?:string[];
}