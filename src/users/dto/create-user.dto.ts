import { 
    IsBoolean, 
    IsEmail, 
    IsString, 
    MinLength 
} from "class-validator";


export class CreateUserDto {

    @IsString()
    @MinLength(3)
    name: string;

    @MinLength(10)
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsBoolean()
    active: boolean;
}