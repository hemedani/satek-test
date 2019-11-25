import { ApolloError } from "apollo-server-core";

export class FindUserError extends ApolloError {
    constructor() {
        super("حساب کاربری فعالی پیدا نشد.", "FINDUSERFAIL")

        Object.defineProperty(this, 'name', { value: 'FindUserError' })
    }
}