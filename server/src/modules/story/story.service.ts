import { Injectable } from '@nestjs/common';
import * as storyDb from './story.database';
import * as voteDb from '../vote/vote.database';

import logger from '../../../tools/logger';
import { Cron } from '@nestjs/schedule';
@Injectable()
export class StoryService {
  async postStory(req) {
    const { authorid, title, content, mainMood, secondaryMoods } = req.body;
    await storyDb.addStory({
      authorid,
      title,
      content,
      mainMood,
      secondaryMoods,
    });
  }

  // get
  async getStory(req) {
    const { storyid } = req.body;
    return await storyDb.getStory(storyid);
  }
  // get
  async getStories(req) {
    let limit;
    if (req.body?.limit > 20) limit = 20;
    else limit = req.body.limit || 5;
    const { page } = req.body;
    const offset = (page - 1) * limit;
    const { stories, storiesCount } = await storyDb.getStories({
      offset,
      limit,
    });
    return { stories, storiesCount, page, limit };
  }
  async getBestStoriesAllTime(req) {
    const { count } = req.body;
    return await storyDb.getNBestStoriesAllTime(count);
  }
  async getBestStoriesLast7Days(req) {
    const { count } = req.body;
    return await storyDb.getNBestStoriesLast7Days(count);
  }
  // delete
  async deleteStory(req) {
    const { storyid } = req.body;
    return await storyDb.deleteStory(storyid);
  }

  @Cron('*/5 * * * * *')
  handleCalculateRatings() {
    voteDb.calculateRatings();
  }
}
