import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Customer_Order')
export class CustomerOrderEntity {

   @PrimaryGeneratedColumn()
   order_id: String

   @Column({
    type: "varchar"
   })
   invoice_no: String

   @Column({
    type: "varchar"
   })
   invoice_prefix: String

   @Column({
    type: "varchar"
   })
   store_id: String

   @Column({
    type: "varchar"
   })
   store_name: String

   @Column({
    type: "varchar"
   })
   store_url: String

   @Column({
    type: "varchar"
   })      
   customer_id: String

   @Column({
    type: "varchar"
   })
   customer_group_id : String

   @Column({
    type: "varchar"
   })
   firstname: String

   @Column({
    type: "varchar"
   })
   lastname: String

   @Column({
    type: "varchar"
   })
   email: String

   @Column({
    type: "varchar"
   })
   telephone: String

   @Column({
    type: "varchar"
   })
   custom_field: String

   @Column({
    type: "varchar"
   })
   payment_firstname: String

   @Column({
    type: "varchar"
   })
   payment_lastname: String

   @Column({
    type: "varchar"
   })
   payment_compamny: String

   @Column({
    type: "varchar"
   })
   payment_address1: String

   @Column({
      type: "varchar"
   })
   payment_address2: String

   @Column({
      type: "varchar"
     })
     payment_city: String

     @Column({
      type: "varchar"
     })
     payment_postcode: String

     @Column({
      type: "varchar"
     })
     payment_country

     @Column({
      type: "numeric"
     })
     payment_country_id: Number

     @Column({
      type: "numeric"
     })
     payment_zone: Number

     @Column({
      type: "numeric"
     })
     payment_zone_id: Number

     @Column({
      type: "varchar"
     })
     payment_address_fomate: String

     @Column({
      type: "varchar"
     })
     payment_method: String

     @Column({
      type: "numeric"
     })
     payment_code: Number

     @Column({
      type: "varchar"
     })
     shipping_firstname: String

     @Column({
      type: "varchar"
     })
     shipping_lastname: String

     @Column({
      type: "varchar"
     })
     shipping_address1: String

     @Column({
      type: "varchar"
     })
     shipping_address_format: String

     @Column({
      type: "varchar"
     })
     shipping_custom_field: String

     @Column({
      type: "varchar"
     })
     shipping_method: String

     @Column({
      type: "numeric"
     })
     shipping_code: Number

     @Column({
      type: "varchar"
     })
     comment: String

     @Column({
      type: "varchar"
     })
     total: String

     @Column({
      type: "numeric"
     })
     order_status_id: Number

     @Column({
      type: "numeric"
     })
     affiliate_id: Number

     @Column({
      type: "varchar"
     })
     commission: String

     @Column({
      type: "numeric"
     })
     marketing_id: Number

     @Column({
      type: "varchar"
     })
     tracking: String

     @Column({
      type: "numeric"
     })
     currency_id:  String

     @Column({
      type: "numeric"
     })
     currency_code: String

     @Column({
      type: "varchar"
     })
     currency_value: String

     @Column({
      type: "varchar"
     })
     ip : String

     @Column({
      type: "varchar"
     })
     user_agent: String

     @Column({
      type: "varchar"
     })
     date_added : String

     @Column({
      type: "varchar"
     })
     date_modified:  String
     
}