import { Arg, ClassType, Query, Resolver, UseMiddleware } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { getAllResolverName } from "../../utils/namOfResolvers";
import { PaginationInput } from "./domains/PaginationInput";
import { defaultMiddleWares } from "./shared/defaultMiddleWares";

export function getAllBaseResolver<T extends ClassType>(
    suffix: string,
    returnType: T,
    entity: any,
    _relations: string[] = [],
    middleWare: Middleware<any>[] = []
) {
    @Resolver()
    class BaseResolver {
        @Query(() => [returnType], { name: getAllResolverName(suffix) })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async get(
            @Arg("pagination", () => PaginationInput, {
                defaultValue: new PaginationInput()
            })
            pagination: PaginationInput
        ) {
            return await entity.find({
                // relations,
                order: {
                    createdAt: "DESC"
                },
                skip: (pagination.page - 1) * pagination.take,
                take: pagination.take
            });
        }
    }

    return BaseResolver;
}
