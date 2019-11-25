import { ApolloError } from "apollo-server-core";

export class BadCreateError extends ApolloError {
    constructor(msg: any = "") {
        super("مشکلی در ساختن وجود دارد." + ` ${msg}`, "BADCREATE");

        Object.defineProperty(this, "name", { value: "BadCreateError" });
    }
}
