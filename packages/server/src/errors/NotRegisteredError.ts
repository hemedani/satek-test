import { ApolloError } from "apollo-server-core";

export class NotRegisteredError extends ApolloError {
    constructor() {
        super("شما در سایت ثبت نام نشده اید.", "NOTREGISTERED")

        Object.defineProperty(this, 'name', { value: 'NotRegisteredError' })
    }
}