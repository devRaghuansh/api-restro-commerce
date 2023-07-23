import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from "./account.entity";
import { Repository } from 'typeorm';
@Injectable()
export class AccountService {

    constructor(
        @InjectRepository(AccountEntity)
        private accountRepository : Repository<AccountEntity>
      ) {}

      async createAccount(account) {
        const newAccount =  this.accountRepository.create(account)
        await this.accountRepository.save(newAccount);
         return newAccount;
      }

      async findUserByEmail(email: string) {
        return await AccountEntity.findOne({
            where: {
                email: email,
            },
        });
    }



}