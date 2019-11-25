import { ApolloError } from "apollo-server-core";

export class AlreadyConfirmedError extends ApolloError {
    constructor() {
        super("حساب کاربری قبلا با این شماره موبایل فعال شده است.", "ALREADYCONFIRMED")

        Object.defineProperty(this, 'name', { value: 'AlreadyConfirmedError' })
    }
}