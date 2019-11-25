import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { BadRemoveError } from "../../errors/BadRemoveError";
import { deleteResolverName } from "../../utils/namOfResolvers";
import { DeleteBaseResponse } from "./boards/DeleteBaseResponse";
import { defaultMiddleWares } from "./shared/defaultMiddleWares";

export function deleteBaseResolver(
    suffix: string,
    entity: any,
    middleWare: Middleware<any>[] = []
) {
    @Resolver()
    class BaseResolver {
        @Mutation(() => DeleteBaseResponse, {
            name: deleteResolverName(suffix)
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async get(@Arg("id", () => String) id: string) {
            let deleteResponse: any;
            try {
                deleteResponse = await entity.delete(id);
            } catch {
                throw new BadRemoveError();
            }
            const response: DeleteBaseResponse = {
                ok: deleteResponse.affected >= 1 ? true : false,
                id
            };
            return response;
        }
    }
    return BaseResolver;
}
