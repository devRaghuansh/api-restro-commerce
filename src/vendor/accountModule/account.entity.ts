import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('VendorAccount')
export class VendorAccountEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'This is unique identifier for account'
    })
    id: number

    @Column({
        type: "varchar"
    })
    firstName: string

    @Column({
        type: "varchar"
    })
    lastName: string

    @Column({
        type: "varchar"
    })
    password: string

    @Column({
        type: "varchar"
    })
    avatar: string

    @Column({
        type: "varchar"
    })
    comission : string

    @Column({
        type: "varchar"
    })
    comissionName: string
    
    @Column({
        type: "varchar"
    })
    companyLogo: string

    @Column({
        type: "varchar"
    })
    companyCoverImage: string

    @Column({
        type: "varchar"
    })
    companyDesciption: string

    @Column({
        type: "varchar"
    })
    companyAddress1: string

    @Column({
        type: "varchar"
    })
    companyAddress2: string

    @Column({
        type: "varchar"
    })
    companyCity: string

    @Column({
        type: "varchar"
    })
    companyState: string

    @Column({
        type: "varchar"
    })
    companyCountryID: string

    @Column({
        type: "varchar"
    })
    pincode: string

    @Column({
        type: "varchar"
    })
    companyMobileNumber: string

    @Column({
        type: "varchar"
    })
    companyEmail: string

    @Column({
        type: "varchar"
    })
    companyWebsite: string

    @Column({
        type: "varchar"
    })
    companyGstNumber: string

    @Column({
        type: "varchar"
    })
    companyPanNumber: string

    @Column({
        type: "varchar"
    })
    paymentInformation: string

    @Column({
        type: "varchar"
    })
    mailStatus: string

    @Column({
        type: "varchar"
    })
    status: string

    @Column({
        type: "varchar"
    })
    documents: string

}