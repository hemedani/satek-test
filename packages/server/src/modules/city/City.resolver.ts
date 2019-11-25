import { Arg, Query, Resolver, UseMiddleware } from "type-graphql";
import { getRepository } from "typeorm";
import { City } from "../../entity/City";
import { NormalUserMiddlewares } from "../../utils/CommonMiddlewareList";
import { getAllResolverName } from "../../utils/namOfResolvers";
import { PaginationInput } from "../base/domains/PaginationInput";
import { defaultMiddleWares } from "../base/shared/defaultMiddleWares";
import { CityInput } from "./domains/CityInput";
import { suffix } from "./InheritedCity.resolver";

@Resolver(() => City)
export class CityResolver {
    @Query(() => [City], { name: getAllResolverName(suffix) })
    @UseMiddleware(...defaultMiddleWares(), ...NormalUserMiddlewares)
    async getCity(
        @Arg("data", { nullable: true }) cityInput: CityInput,
        @Arg("pagination", { defaultValue: new PaginationInput() })
        paginationInput: PaginationInput
    ) {
        let firstWhereAdded = false;
        let query: any = getRepository(City).createQueryBuilder("city");

        if (cityInput) {
            if (cityInput.stateId) {
                query.where("city.stateId = :stateId", {
                    stateId: cityInput.stateId
                });
                firstWhereAdded = true;
            }

            if (cityInput.document) {
                if (firstWhereAdded) {
                    query.andWhere("city.document @@ plainto_tsquery(:query)", {
                        query: cityInput.document
                    });
                } else {
                    query.where("city.document @@ plainto_tsquery(:query)", {
                        query: cityInput.document
                    });
                }
            }
        }
        query
            .skip((paginationInput.page - 1) * paginationInput.take)
            .take(paginationInput.take);

        return query.getMany();
    }
}
