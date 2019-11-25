import { Resolver, Query, UseMiddleware, ClassType, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";

import { defaultMiddleWares } from "./shared/defaultMiddleWares";
import { getResolverName } from "../../utils/namOfResolvers";
import { NotFoundError } from "../../errors/NotFoundError";

export function getBaseResolver<T extends ClassType>(
    suffix: string,
    returnType: T,
    entity: any,
    relations: string[] = [],
    middleWare: Middleware<any>[] = []
) {
    @Resolver()
    class BaseResolver {

        @Query(() => returnType, { name: getResolverName(suffix) })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async get(@Arg("id", () => String) id: string) {
            const model = await entity.findOne({ where: { id }, relations })
            if (!model) {
                throw new NotFoundError()
            }
            return model
        }

    }

    return BaseResolver;
}