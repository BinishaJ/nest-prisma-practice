import { Catch, ArgumentsHost } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Request, Response } from "@nestjs/common";
import { MyLoggerService } from "./my-logger/my-logger.service";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

type MyResponseObj = {
    statusCode: number,
    timestamp: string,
    path: string,
    response: string | object
}

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
    private readonly logger 
}