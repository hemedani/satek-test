import { ApolloError } from "apollo-server-core";

export class BadTokenError extends ApolloError {
    constructor() {
        super("توکن ارسالی بد است.", "BADTOKEN")

        Object.defineProperty(this, 'name', { value: 'BadTokenError' })
    }
}