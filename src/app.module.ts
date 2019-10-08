import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    CustomerModule,
    MongooseModule.forRoot('mongodb+srv://alynasser:alynasser@aly-nasser-fyfqh.mongodb.net/customer-app?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
