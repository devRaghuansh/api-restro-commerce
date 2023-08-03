import { Injectable } from "@nestjs/common";
import { CustomerCartEntity } from "./cart.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CustomerCartService {
    constructor(
        @InjectRepository(CustomerCartEntity)
        private customerCartEntity : Repository<CustomerCartEntity>
    ) {

    }
    createCustomerCart(cartDetail) {
        const createCartDetail = this.customerCartEntity.create(cartDetail)
        const saveCartDetail = this.customerCartEntity.save(createCartDetail)
        return saveCartDetail
    }
}