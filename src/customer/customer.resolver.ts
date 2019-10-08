import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { CustomerType } from './dto/create-customer.dto';
import { CustomerInput } from './input-customer.input';

@Resolver('Customer')
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) { }

  @Query(() => [CustomerType])
  async customers() {
    return this.customerService.getAllCustomers();
  }

  @Query(() => CustomerType)
  async customer(@Args('id') id: string) {
    return await this.customerService.getCustomer(id);
  }

  @Mutation(() => CustomerType)
  async createCustomer(@Args('customerInfo') customerInfo: CustomerInput) {
    return this.customerService.addCustomer(customerInfo);
  }

  @Mutation(() => CustomerType)
  async updateCustomer(
    @Args('customerId') customerId: string,
    @Args('customerInfo') customerInfo: CustomerInput) {
    return this.customerService.updateCustomer(customerId, customerInfo);
  }

  @Mutation(() => CustomerType)
  async deleteCustomer(@Args('customerId') customerId: string) {
    return this.customerService.deleteCustomer(customerId);
  }
}
