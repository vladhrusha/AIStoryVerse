import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { StoryService } from './story.service';
import logger from '../../../tools/logger';
@Controller('/story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get('/get')
  async getStory(@Req() req) {
    const result = await this.storyService.getStory(req);
    return result;
  }
  @Get('/get/all')
  async getStories(@Req() req) {
    const result = await this.storyService.getStories(req);
    return result;
  }
  @Get('/best')
  async getBestStories(@Req() req) {
    // logger.info(req.body);
    const result = await this.storyService.getBestStoriesAllTime(req);
    return result;
  }
  @Get('/best/7days')
  async getBestStories7days(@Req() req) {
    const result = await this.storyService.getBestStoriesLast7Days(req);
    return result;
  }
  @Post('/add')
  async postStory(@Req() req) {
    try {
      const result = await this.storyService.postStory(req);
      return result;
    } catch (err) {
      return err;
    }
  }
  @Delete('/delete')
  async deleteStory(@Req() req) {
    const result = await this.storyService.deleteStory(req);
    return result;
  }
}
