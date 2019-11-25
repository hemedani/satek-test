import { ClassType, Field, Int, ObjectType } from "type-graphql";

export default function PaginatedResponse<TItem>(TItemClass: ClassType<TItem>) {
    @ObjectType(`Paginated${TItemClass.name}Response`)
    class PaginatedResponseClass {
        @Field(() => [TItemClass])
        items: TItem[];

        @Field(() => Int)
        total: number;
    }

    return PaginatedResponseClass;
}
