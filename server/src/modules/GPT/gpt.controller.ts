import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Req,
} from '@nestjs/common';
import { GPTService } from './gpt.service';
import logger from '../../../tools/logger';

@Controller('/gpt')
export class GPTController {
  constructor(private readonly GPTService: GPTService) {}

  @Get('/basic')
  @HttpCode(HttpStatus.OK)
  async basic(@Body('prompt') prompt: string) {
    const response = await this.GPTService.basic(prompt);
    return response;
  }
}
