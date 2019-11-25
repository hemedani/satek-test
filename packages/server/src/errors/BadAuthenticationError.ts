import { ApolloError } from "apollo-server-core";

export class BadAuthenticationError extends ApolloError {
    constructor() {
        super("اطلاعات ورودی شما نا معتبر است.", "BADAUTHENTICATED")

        Object.defineProperty(this, 'name', { value: 'BadAuthenticationError' })
    }
}