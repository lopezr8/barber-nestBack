import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Date {


    @Prop({unique: true})
    hour: string;


    @Prop({required: true})
    name: string; 


    @Prop({required: true})
    service: string; 



}


export const DateSchema = SchemaFactory.createForClass(Date);
