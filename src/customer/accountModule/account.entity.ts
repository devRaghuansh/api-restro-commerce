import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AccountEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'This is unique identifier for account'
    })
    id: number

    @Column({
        type: "varchar"
    })
    title: string;
}