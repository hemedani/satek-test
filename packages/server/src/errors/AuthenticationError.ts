import { ApolloError } from "apollo-server-core";

export class AuthenticationError extends ApolloError {
    constructor() {
        super("شما نیاز به احراز هویت دارید.", "UNAUTHENTICATED")

        Object.defineProperty(this, 'name', { value: 'AuthenticationError' })
    }
}