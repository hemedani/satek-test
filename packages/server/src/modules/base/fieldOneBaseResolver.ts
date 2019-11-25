import { FieldResolver, Resolver, Root, UseMiddleware } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { CatchNotFoundError } from "../../utils/errorHandlers";
import { defaultMiddleWares } from "./shared/defaultMiddleWares";

export function fieldOneBaseResolver(
    parentEntity: any,
    _parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseOneFirstResolver {
        @FieldResolver(() => childEntity, {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldOneFirst(@Root() parent: any) {
            if (!parent[childSuffix] && parent[`${childSuffix}Id`]) {
                return CatchNotFoundError(
                    await childEntity.findOne(parent[`${childSuffix}Id`])
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseOneFirstResolver;
}

export function fieldOneSecondBaseResolver(
    parentEntity: any,
    _parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseOneSecondResolver {
        @FieldResolver(() => childEntity, {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldOneSecond(@Root() parent: any) {
            if (!parent[childSuffix] && parent[`${childSuffix}Id`]) {
                return CatchNotFoundError(
                    await childEntity.findOne(parent[`${childSuffix}Id`])
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseOneSecondResolver;
}

export function fieldOneThirdBaseResolver(
    parentEntity: any,
    _parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseOneThirdResolver {
        @FieldResolver(() => childEntity, {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldOneThird(@Root() parent: any) {
            if (!parent[childSuffix] && parent[`${childSuffix}Id`]) {
                return CatchNotFoundError(
                    await childEntity.findOne(parent[`${childSuffix}Id`])
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseOneThirdResolver;
}

export function fieldOneForthBaseResolver(
    parentEntity: any,
    _parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseOneForthResolver {
        @FieldResolver(() => childEntity, {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldOneForth(@Root() parent: any) {
            if (!parent[childSuffix] && parent[`${childSuffix}Id`]) {
                return CatchNotFoundError(
                    await childEntity.findOne(parent[`${childSuffix}Id`])
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseOneForthResolver;
}

export function fieldOneFifthBaseResolver(
    parentEntity: any,
    _parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseOneFifthResolver {
        @FieldResolver(() => childEntity, {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldOneFifth(@Root() parent: any) {
            if (!parent[childSuffix] && parent[`${childSuffix}Id`]) {
                return CatchNotFoundError(
                    await childEntity.findOne(parent[`${childSuffix}Id`])
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseOneFifthResolver;
}

export function fieldOneSixthBaseResolver(
    parentEntity: any,
    _parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseOneSixthResolver {
        @FieldResolver(() => childEntity, {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldOneSixth(@Root() parent: any) {
            if (!parent[childSuffix] && parent[`${childSuffix}Id`]) {
                return CatchNotFoundError(
                    await childEntity.findOne(parent[`${childSuffix}Id`])
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseOneSixthResolver;
}

export function fieldOneSeventhBaseResolver(
    parentEntity: any,
    _parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseOneSeventhResolver {
        @FieldResolver(() => childEntity, {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldOneSeventh(@Root() parent: any) {
            if (!parent[childSuffix] && parent[`${childSuffix}Id`]) {
                return CatchNotFoundError(
                    await childEntity.findOne(parent[`${childSuffix}Id`])
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseOneSeventhResolver;
}

export function fieldOneEighthBaseResolver(
    parentEntity: any,
    _parentSuffix: string,
    childEntity: any,
    childSuffix: string,
    middleWare: Middleware<any>[] = []
) {
    @Resolver(() => parentEntity)
    class BaseOneEighthResolver {
        @FieldResolver(() => childEntity, {
            name: childSuffix,
            nullable: true
        })
        @UseMiddleware(...defaultMiddleWares(), ...middleWare)
        async fieldOneEighth(@Root() parent: any) {
            if (!parent[childSuffix] && parent[`${childSuffix}Id`]) {
                return CatchNotFoundError(
                    await childEntity.findOne(parent[`${childSuffix}Id`])
                );
            } else {
                return parent[childSuffix];
            }
        }
    }
    return BaseOneEighthResolver;
}
