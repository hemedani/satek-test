import { ApolloError } from "apollo-server-core";

export class NotFoundError extends ApolloError {
    constructor(msg: any = "") {
        super("پیدا نشد." + " " + msg, "NOTFOUND");

        Object.defineProperty(this, "name", { value: "NotFoundError" });
    }
}
