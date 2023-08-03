import { Injectable } from "@nestjs/common";
import { CustomerOrderEntity } from "./order.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CustomerOrderService {
    constructor(
        @InjectRepository(CustomerOrderEntity)
        private customerOrderEntity : Repository<CustomerOrderEntity>
    ) {
    }
    createCustomerOrder(newOrder) {
        const createOrder = this.customerOrderEntity.create(newOrder)
        const saveOrder = this.customerOrderEntity.save(createOrder)
        return saveOrder
    }
}