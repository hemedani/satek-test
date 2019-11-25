import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class DeleteBaseResponse {
    @Field()
    id: string;

    @Field(() => Boolean)
    ok: boolean;
}
