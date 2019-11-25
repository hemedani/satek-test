import { ApolloError } from "apollo-server-core";

export class BadOrderStatusError extends ApolloError {
    constructor() {
        super(
            "شما قادر به تغییر وضعیت درخواست به وضعیت انتخابی نیستید.",
            "BADORDERSTATUS"
        );

        Object.defineProperty(this, "name", { value: "BadOrderStatus" });
    }
}
