import { Injectable } from "@nestjs/common";
import { VendorAccountEntity } from "./account.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class VendorAccountService {
    constructor(
        @InjectRepository(VendorAccountEntity)
        private vendorAccountEntity : Repository<VendorAccountEntity>
    ) {}

    async createVendorAccuntProfile(newVendorDetail) {
        const createVendorAccount = this.vendorAccountEntity.create(newVendorDetail)
        const saveVendorAccount = await this.vendorAccountEntity.save(createVendorAccount)
        return saveVendorAccount
        //return 'creating vendor account profile'
    }

}