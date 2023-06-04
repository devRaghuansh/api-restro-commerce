import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Customer_Cart')
export class CustomerCartEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'This is unique identifier for account'
    })
    id: number

    @Column({
        type: "numeric"
    })
    cart_id: number

    @Column({
        type: "numeric"
    })
    customer_id: number;

    @Column({
        type: "numeric"
    })
    api_id: number;
    
    @Column({
        type: "varchar"
    })
    session_id: string;

    @Column({
        type: "numeric"
    }) 
    product_id: number; 

    @Column({
        type: "numeric"
    })
    quantity: number;
    
    @Column({
        type: "varchar"
    })
    date_added: string;

}