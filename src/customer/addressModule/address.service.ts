import { Injectable } from "@nestjs/common";
import { AddressEntity } from "./address.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CustomerAddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private addressEntity: Repository<AddressEntity>
    ) {
    }
    createCustomerAddress(newCustomerAddress) {
        const createCustoemrAddress = this.addressEntity.create(newCustomerAddress)
        const saveCustomerAddress = this.addressEntity.save(createCustoemrAddress)
        return saveCustomerAddress
    }
}