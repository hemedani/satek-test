import { ApolloError } from "apollo-server-core";

export class SMSError extends ApolloError {
    constructor() {
        super("مشکل در سرور ارسال پیام کوتاه", "SMSFAIL");

        Object.defineProperty(this, 'name', { value: 'SMSError' });
    }
}
