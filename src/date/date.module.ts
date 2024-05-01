import { Module } from '@nestjs/common';
import { DateService } from './date.service';
import { DateController } from './date.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DateSchema, Date } from './entities/date.entity';

@Module({
  controllers: [DateController],
  providers: [DateService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Date.name, 
        schema: DateSchema
      }
    ])

  ]
})
export class DateModule {}
