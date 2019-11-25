import { ApolloError } from "apollo-server-core";

export class BadRemoveError extends ApolloError {
    constructor() {
        super("شما قادر به حذف این رابطه نیستید.", "BADREMOVE")

        Object.defineProperty(this, 'name', { value: 'BadRemoveError' })
    }
}