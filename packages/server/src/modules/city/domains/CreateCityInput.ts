import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import { City } from "../../../entity/City";

@InputType()
export class CreateCityInput implements Partial<City> {
    @Field()
    @Length(2, 255)
    name: string;

    @Field()
    @Length(2, 255)
    enName: string;

    @Field()
    stateId: string;
}
