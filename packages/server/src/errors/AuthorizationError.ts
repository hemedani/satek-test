import { ApolloError } from "apollo-server-core";

export class AuthorizationError extends ApolloError {
    constructor() {
        super("شما نیاز به سطح دسترسی متفاوتی دارید.", "UNAUTHORIZATION");

        Object.defineProperty(this, "name", { value: "AuthorizationError" });
    }
}
