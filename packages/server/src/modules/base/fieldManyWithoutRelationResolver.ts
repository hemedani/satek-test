import {
    Arg,
    FieldResolver,
    Resolver,
    Root,
    UseMiddleware
} from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { PaginationInput } from "./domains/PaginationInput";
import { defaultMiddleWares } from "./shared/defaultMiddleWares";

export function fieldManyWithouRelationBaseResolver(
    parentEntity: any,
    _parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseManyWithoutRelationResolver {
        @FieldResolver(() => [childEntity], {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldManyWithoutRelation(
            @Root() parent: any,
            @Arg("pagination", () => PaginationInput, {
                defaultValue: new PaginationInput()
            })
            pagination: PaginationInput
        ) {
            if (!parent[childSuffix]) {
                return await childEntity.findByIds(
                    parent[`${childSuffix}Ids`] || [],
                    {
                        skip: (pagination.page - 1) * pagination.take,
                        take: pagination.take
                    }
                );
            } else {
                return parent[childSuffix];
            }
        }
    }

    return BaseManyWithoutRelationResolver;
}

export function fieldManyWithouRelationSecondBaseResolver(
    parentEntity: any,
    _parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseManyWithoutRelationSecondResolver {
        @FieldResolver(() => [childEntity], {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldManyWithoutRelationSecond(
            @Root() parent: any,
            @Arg("pagination", () => PaginationInput, {
                defaultValue: new PaginationInput()
            })
            pagination: PaginationInput
        ) {
            if (!parent[childSuffix]) {
                return await childEntity.findByIds(
                    parent[`${childSuffix}Ids`] || [],
                    {
                        skip: (pagination.page - 1) * pagination.take,
                        take: pagination.take
                    }
                );
            } else {
                return parent[childSuffix];
            }
        }
    }

    return BaseManyWithoutRelationSecondResolver;
}
