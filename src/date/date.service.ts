import { Injectable } from '@nestjs/common';
import { CreateDateDto } from './dto/create-date.dto';
import { UpdateDateDto } from './dto/update-date.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Date } from './entities/date.entity';
import { Model } from 'mongoose';

@Injectable()
export class DateService {


  constructor(
    @InjectModel(Date.name)
     private dateModel: Model<Date>

  ){}

  create(createDateDto: CreateDateDto): Promise<Date> {
    const newDate = new this.dateModel(createDateDto);

    return newDate.save();
  }

  findAll() {
    return this.dateModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} date`;
  }

  update(id: number, updateDateDto: UpdateDateDto) {
    return `This action updates a #${id} date`;
  }

  remove(id: number) {
    return `This action removes a #${id} date`;
  }
}
