import {
    Arg,
    FieldResolver,
    Resolver,
    Root,
    UseMiddleware
} from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { getRepository } from "typeorm";
import { CatchNotFoundError } from "../../utils/errorHandlers";
import { PaginationInput } from "./domains/PaginationInput";
import { defaultMiddleWares } from "./shared/defaultMiddleWares";

export function fieldManyBaseResolver(
    parentEntity: any,
    parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseManyResolver {
        @FieldResolver(() => [childEntity], {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldMany(
            @Root() parent: any,
            @Arg("pagination", () => PaginationInput, {
                defaultValue: new PaginationInput()
            })
            pagination: PaginationInput
        ) {
            if (!parent[childSuffix]) {
                return CatchNotFoundError(
                    await getRepository(childEntity)
                        .createQueryBuilder(childSuffix)
                        .where(`${childSuffix}.${parentSuffix}Id = :value`, {
                            value: parent.id
                        })
                        .skip((pagination.page - 1) * pagination.take)
                        .take(pagination.take)
                        .getMany()
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseManyResolver;
}

export function fieldManySecondBaseResolver(
    parentEntity: any,
    parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseManySecondResolver {
        @FieldResolver(() => [childEntity], {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldManySecond(
            @Root() parent: any,
            @Arg("pagination", () => PaginationInput, {
                defaultValue: new PaginationInput()
            })
            pagination: PaginationInput
        ) {
            if (!parent[childSuffix]) {
                return CatchNotFoundError(
                    await getRepository(childEntity)
                        .createQueryBuilder(childSuffix)
                        .where(`${childSuffix}.${parentSuffix}Id = :value`, {
                            value: parent.id
                        })
                        .skip((pagination.page - 1) * pagination.take)
                        .take(pagination.take)
                        .getMany()
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseManySecondResolver;
}

export function fieldManyThirdBaseResolver(
    parentEntity: any,
    parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseManyThirdResolver {
        @FieldResolver(() => [childEntity], {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldManyThird(
            @Root() parent: any,
            @Arg("pagination", () => PaginationInput, {
                defaultValue: new PaginationInput()
            })
            pagination: PaginationInput
        ) {
            if (!parent[childSuffix]) {
                return CatchNotFoundError(
                    await getRepository(childEntity)
                        .createQueryBuilder(childSuffix)
                        .where(`${childSuffix}.${parentSuffix}Id = :value`, {
                            value: parent.id
                        })
                        .skip((pagination.page - 1) * pagination.take)
                        .take(pagination.take)
                        .getMany()
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseManyThirdResolver;
}

export function fieldManyFourthBaseResolver(
    parentEntity: any,
    parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseManyFourthResolver {
        @FieldResolver(() => [childEntity], {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldManyFourth(
            @Root() parent: any,
            @Arg("pagination", () => PaginationInput, {
                defaultValue: new PaginationInput()
            })
            pagination: PaginationInput
        ) {
            if (!parent[childSuffix]) {
                return CatchNotFoundError(
                    await getRepository(childEntity)
                        .createQueryBuilder(childSuffix)
                        .where(`${childSuffix}.${parentSuffix}Id = :value`, {
                            value: parent.id
                        })
                        .skip((pagination.page - 1) * pagination.take)
                        .take(pagination.take)
                        .getMany()
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseManyFourthResolver;
}
