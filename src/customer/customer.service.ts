import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { CustomerType } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) {}

  async getAllCustomers(): Promise<Customer[]> {
    const customers = await this.customerModel.find().exec();
    return customers;
  }

  async getCustomer(customerID: string): Promise<Customer> {
    const customer = await this.customerModel.findById(customerID).exec();
    return customer;
  }

  async addCustomer(createCustomerDTO: CustomerType): Promise<Customer> {
    const newCustomer = new this.customerModel(createCustomerDTO);
    return newCustomer.save();
  }

  async updateCustomer(customerID: string, createCustomerDTO: CustomerType): Promise<Customer> {
    const updatedCustomer = await this.customerModel
                                      .findByIdAndUpdate(
                                        customerID,
                                        createCustomerDTO,
                                        { new: true },
                                        );

    return updatedCustomer;
  }

  async deleteCustomer(customerID: string): Promise<Customer> {
    const deletedCustomer = await this.customerModel
                                      .findByIdAndRemove(customerID);

    return deletedCustomer;
  }
}
