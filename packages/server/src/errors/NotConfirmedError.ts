import { ApolloError } from "apollo-server-core";

export class NotConfirmedError extends ApolloError {
    constructor() {
        super("شماره موبایل شما هنوز تایید نشده است.", "NOTCONFIRMED")

        Object.defineProperty(this, 'name', { value: 'NotConfirmedError' })
    }
}