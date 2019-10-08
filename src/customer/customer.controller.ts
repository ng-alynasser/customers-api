import { Controller,
         Post,
         Get,
         Res,
         HttpStatus,
         Param,
         NotFoundException,
         Body,
         Query,
         Put,
         Delete} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Response } from 'express-serve-static-core';
import { CustomerType } from './dto/create-customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Get()
  async getAllCustomers(@Res() res: Response) {
    const customers = await this.customerService.getAllCustomers();
    return res.status(HttpStatus.OK).json(customers);
  }

  @Get(':customerID')
  async getCustomer(@Res() res: Response, @Param('customerID') customerID: string ) {
    const customer = await this.customerService.getCustomer(customerID);
    if (!customer) {
      throw new NotFoundException('Customer does not exist');
    }
    return res.status(HttpStatus.OK).json(customer);
  }

  @Post()
  async addCustomer(@Res() res: Response, @Body() createCustomDTO: CustomerType) {
    const customer = await this.customerService.addCustomer(createCustomDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been created successfully',
      customer,
    });
  }

  @Put()
  async updateCustomer(
    @Res() res: Response,
    @Query('customerID') customerID: string,
    @Body() createCustomerDTO: CustomerType ) {
      const customer = await this.customerService.updateCustomer(customerID, createCustomerDTO);
      if (!customer) {
        throw new NotFoundException('Customer does not exist');
      }
      return res.status(HttpStatus.OK).json({
        message: 'Customer has been updated successfully',
        customer,
      });
    }

  @Delete()
  async deleteCustomer(@Res() res: Response, @Query('customerID') customerID: string) {
    const customer = await this.customerService.deleteCustomer(customerID);
    if (!customer) {
      throw new NotFoundException('Customer does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been deleted',
      customer,
    });
  }
}
