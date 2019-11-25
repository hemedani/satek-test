import { ApolloError } from "apollo-server-core";

export class BadRequestError extends ApolloError {
    constructor(msg: any = "درخواست شما مناسب نیست.") {
        super(msg, "BADREQUEST");

        Object.defineProperty(this, "name", { value: "BadRequest" });
    }
}
