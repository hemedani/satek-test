import { Field, Int, InputType } from "type-graphql";

@InputType()
export class PaginationInput {
    @Field(() => Int, { defaultValue: 1 })
    page: number = 1;

    @Field(() => Int, { defaultValue: 25 })
    take: number = 25;
}
