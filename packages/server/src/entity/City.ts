import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";

@ObjectType()
@Entity()
export class City {
  @Field()
  @Column("varchar", { length: 255 })
  name: string;

  @Field()
  @Column("varchar", { length: 255 })
  enName: string;
}
