import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcryptjs';
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
        type: "varchar",
        unique:true 
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
    avatar: string;

    @Column({
        type: "varchar"
    })
    mailStatus: string;

    @Column({
        type: "varchar"
    })
    status: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 8);
    }
    
    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}