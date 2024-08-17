import {
    IsBoolean,
    IsString,
    Min,
    MinLength
} from 'class-validator';

export class CreateTaskDto {

    @IsString()
    @MinLength(3)
    name: string;

    @MinLength(10)
    @IsString()
    description: string;

    @IsBoolean()
    completed: boolean;
}
