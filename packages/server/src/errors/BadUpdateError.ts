import { ApolloError } from "apollo-server-core";

export class BadUpdateError extends ApolloError {
    constructor() {
        super("به درستی آپدیت کنید.", "BADUPDATE")

        Object.defineProperty(this, 'name', { value: 'BadUpdateError' })
    }
}