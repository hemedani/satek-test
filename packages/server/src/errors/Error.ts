import { ApolloError } from "apollo-server-core";

export class Error extends ApolloError {
    constructor(msg: string) {
        super(msg, "ERROR");

        Object.defineProperty(this, "name", { value: "Error" });
    }
}
