import { Module } from '@nestjs/common';
import { DateModule } from './date/date.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    } ),
    DateModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
