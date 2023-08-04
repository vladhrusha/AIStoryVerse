import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { GPTService } from './gpt.service';

@Controller('chatgpt')
export class GPTController {
  constructor(private readonly GPTService: GPTService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async generateResponse(@Body('prompt') prompt: string) {
    const response = await this.GPTService.generateResponse(prompt);
    // console.log(response.result);
    return response;
  }
}
