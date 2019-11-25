import { ApolloError } from "apollo-server-core";

export class InvalidTokenError extends ApolloError {
    constructor() {
        super("توکن شما غیر معتبر است.", "INVALIDTOKEN")

        Object.defineProperty(this, 'name', { value: 'InvalidTokenError' });
    }
}