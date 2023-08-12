import { TypeOrmModule } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('vendor_banner')
export class VendorBannerEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar"
    })
    title: String

    @Column({
        type: "varchar"
    })
    content: String

    @Column({
        type: "varchar"
    })
    image: String

    @Column({
        type: "varchar"
    })
    link: String

    @Column({
        type: "varchar"
    })
    position: String

    @Column({
        type: "numeric"
    })
    status: Number

}