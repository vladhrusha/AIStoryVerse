import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { GPTService } from './gpt.service';

@Controller('/gpt')
export class GPTController {
  constructor(private readonly GPTService: GPTService) {}

  @Post('/basic')
  @HttpCode(HttpStatus.OK)
  async basic(@Body('prompt') prompt: string) {
    const response = await this.GPTService.basic(prompt);
    return response;
  }
}
