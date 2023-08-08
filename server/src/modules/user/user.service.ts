import { Injectable } from '@nestjs/common';
import * as userDb from './user.database';
import logger from '../../../tools/logger';
@Injectable()
export class UserService {
  //   async getUser(req) {
  //     logger.info(req);
  //     const { googleId } = req.body;
  //     return 'kek';
  //     // return await userDb.getByNickname(nickname);
  //   }
  //   async updateUser(req) {
  //     return;
  //   }
  //   async deleteUser(req) {
  //     return;
  //   }
  //   // backlog for now
  //   async addUser(req) {
  //     const {nickname, firstname, lastname, password} = req.body;
  //     return;
  //   }

  async addBookmark(req) {
    const { storyId, googleId } = req.body;
    await userDb.addBookmark({ storyId, googleId });
    return 'added bookmark';
  }
  async removeBookmark(req) {
    const { storyId, googleId } = req.body;
    await userDb.removeBookmark({ storyId, googleId });
    return 'removed bookmark';
  }
}
