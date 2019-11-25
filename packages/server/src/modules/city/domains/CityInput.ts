import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { City } from "../../../entity/City";

@InputType()
export class CityInput implements Partial<City> {
    @Field({ nullable: true })
    @MaxLength(255)
    document?: string;

    @Field({ nullable: true })
    stateId: string;
}
