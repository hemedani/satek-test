import { ApolloError } from "apollo-server-core";

export class ServerError extends ApolloError {
    constructor() {
        super("مشکلی در سرور پیش آمده است.", "SERVERERROR");

        Object.defineProperty(this, "name", { value: "ServerError" });
    }
}
