import { Resolver, ClassType, Mutation, UseMiddleware, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";

import { defaultMiddleWares } from "./shared/defaultMiddleWares";
import { updateResolverName } from "../../utils/namOfResolvers";
import { BadUpdateError } from "../../errors/BadUpdateError";
import { NotFoundError } from "../../errors/NotFoundError";

export function updateBaseResolver<T extends ClassType, X extends ClassType>(
    suffix: string,
    returnType: T,
    inputType: X,
    entity: any,
    relations: string[] = [],
    middleWare: Middleware<any>[] = []
) {
    @Resolver()
    class BaseResolver {

        @Mutation(() => returnType, { name: updateResolverName(suffix) })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async create(
            @Arg("id", () => String) id: string,
            @Arg("data", () => inputType) data: any
        ) {
            try {
                await entity.update(id, data)
            } catch {
                throw new BadUpdateError()
            }

            const model = await entity.findOne({ where: { id }, relations })
            if (!model) {
                throw new NotFoundError()
            }
            return model
        }
    }

    return BaseResolver;
}