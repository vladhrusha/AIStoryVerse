import { Injectable } from '@nestjs/common';
import * as voteDb from './vote.database';
import logger from '../../../tools/logger';

@Injectable()
export class VoteService {
  async addVote(req) {
    const { value, userId, storyId } = req.body;
    return await voteDb.addVote({ value, userId, storyId });
  }
}
