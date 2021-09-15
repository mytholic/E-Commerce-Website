export class Product {

    id:number;
    name:string;
    description:string;
    price:number;
    image:string;
    category:string;
    quantity:number;
    constructor(category:string,id:number,name:string,price:number,description="",image="",quantity=1)
    {this.id=id,this.name=name,this.description=description,this.price=price,this.image=image,
     this.category=category,this.quantity=quantity   
    
    }

}


