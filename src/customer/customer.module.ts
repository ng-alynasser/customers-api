import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './customer.schema';
import { CustomerResolver } from './customer.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Customer',
      schema: CustomerSchema,
    }]),
  ],
  providers: [
    CustomerService,
    CustomerResolver,
  ],
  controllers: [CustomerController],
})
export class CustomerModule {}
