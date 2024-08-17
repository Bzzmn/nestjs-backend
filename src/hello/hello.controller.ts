import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Req, Res, Query, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {

    @Get('/')
    index ( @Req() request: Request, @Res() response: Response) {
        return response.status(200).send('Hello Mundito');
    }

    @Get('not-found')
    @HttpCode(404)
    notFound() {
        return '404 not found';
    }

    @Get('error')
    @HttpCode(500)
    error() {
        return ('This is an Error');
    };

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        console.log(typeof num);
        return num + 10;
    }

    @Get('status/:stat')
    isUserActive(@Param('stat', ParseBoolPipe) status: boolean) {
        console.log(typeof status);
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        const { name, age } = query;
        console.log(typeof name, typeof age);
        return `Hello ${name}, you are ${age + 10} years old`;
    }
}
