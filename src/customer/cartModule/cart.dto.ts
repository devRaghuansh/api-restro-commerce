import { IsNumber, IsString } from "class-validator";


export class CartDTO {
    @IsNumber()
    cart_id : Number;

    @IsNumber()
    customer_id: Number;

    @IsNumber()
    api_id: Number;
    
    @IsString()
    session_id: String;

    @IsNumber() 
    product_id: Number; 

    @IsNumber()
    quantity: Number;
    
    @IsNumber()
    date_added: String;

}