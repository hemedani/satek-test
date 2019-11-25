import { NotFoundError } from "../errors/NotFoundError";

export async function CatchNotFoundError(query: any) {
    try {
        return await query;
    } catch {
        throw new NotFoundError();
    }
}
