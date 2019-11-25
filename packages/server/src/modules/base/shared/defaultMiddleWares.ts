import { logger } from "../../../middleware/logger";

export const defaultMiddleWares = () => {
    const NODE_ENV = process.env.NODE_ENV
    if (NODE_ENV === "production") {
        return []
    } else {
        return [logger]
    }
}