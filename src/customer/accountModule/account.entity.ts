import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Account')
export class AccountEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'This is unique identifier for account'
    })
    id: number

    @Column({
        type: "varchar"
    })
    userName: string;

    @Column({
        type: "varchar"
    })
    email: string;

    @Column({
        type: "varchar"
    })
    mobileNumber: string;

    @Column({
        type: "varchar"
    })
    password: string;

    @Column({
        type: "varchar"
    })
    confirmPassword: string;

    @Column({
        type: "varchar"
    })
    avatar: string;

    @Column({
        type: "varchar"
    })
    mailStatus: string;

    @Column({
        type: "varchar"
    })
    status: string;
}