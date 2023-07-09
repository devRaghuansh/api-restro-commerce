import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Customer_Address')
export class AddressEntity {

    @PrimaryGeneratedColumn()
    id: String
    @Column({
        type: "numeric"
    })
    customerId: Number

    @Column({
        type: "varchar"
    })
    firstName: String

    @Column({
        type: "varchar"
    })
    lastName: String

    @Column({
        type: "varchar"
    })
    address1: String

    @Column({
        type: "varchar"
    })
    address2: String

    @Column({
        type: "varchar"
    })
    city: String

    @Column({
        type: "varchar"
    })
    state: String

    @Column({
        type: "varchar"
    })
    countryId: String

    @Column({
        type: "varchar"
    })
    postcode: String

    @Column({
        type: "varchar"
    })
    addressType: String

    @Column({
        type: "varchar"
    })
    zoneId: String 

    @Column({
        type: "varchar"
    })
    mobile: String
}