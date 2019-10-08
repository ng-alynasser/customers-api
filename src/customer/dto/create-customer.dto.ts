import { ObjectType, Field, ID } from 'type-graphql';
import { IsString, IsNotEmpty, IsDate } from 'class-validator';

@ObjectType()
export class CustomerType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly phone: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly address: string;
  @Field()
  @IsString()
  readonly description: string;
  @Field()
  @IsDate()
  readonly creadtedAt?: Date;
}
