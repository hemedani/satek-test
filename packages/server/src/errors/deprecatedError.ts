import { ApolloError } from "apollo-server-core";

export class DeprecatedError extends ApolloError {
    constructor() {
        super(
            "This mutation has been deprecated! please contact to admin.",
            "DEPRECATED"
        );

        Object.defineProperty(this, "name", { value: "DeprecatedError" });
    }
}
