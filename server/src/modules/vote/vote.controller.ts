import { Controller, Post, Req } from '@nestjs/common';
import { VoteService } from './vote.service';

@Controller('/vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post('/add')
  addVote(@Req() req) {
    return this.voteService.addVote(req); //
  }
}
