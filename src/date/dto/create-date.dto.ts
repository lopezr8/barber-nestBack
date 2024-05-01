import { IsString } from "class-validator";

export class CreateDateDto {

    @IsString()
    hour: string;

    @IsString()
    name: string;

    @IsString()
    service: string;

}
