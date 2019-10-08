import { InputType, Field } from 'type-graphql';

@InputType()
export class CustomerInput {
  @Field()
  readonly firstName: string;
  @Field()
  readonly lastName: string;
  @Field()
  readonly address: string;
  @Field()
  readonly email: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly description: string;
}
