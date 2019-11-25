import { Resolver, ClassType, Mutation, UseMiddleware, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";

import { defaultMiddleWares } from "./shared/defaultMiddleWares";
import { createResolverName } from "../../utils/namOfResolvers";
import { BadCreateError } from "../../errors/BadCreateError";

export function createBaseResolver<T extends ClassType, X extends ClassType>(
    suffix: string,
    returnType: T,
    inputType: X,
    entity: any,
    _relations: string[] = [],
    middleWare: Middleware<any>[] = []
) {
    @Resolver()
    class BaseResolver {

        @Mutation(() => returnType, { name: createResolverName(suffix) })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async create(@Arg("data", () => inputType) data: any) {
            try {
                return await entity.create(data).save()
            } catch {
                throw new BadCreateError()
            }
        }
    }

    return BaseResolver;
}