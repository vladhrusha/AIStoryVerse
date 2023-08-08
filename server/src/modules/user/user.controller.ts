import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res,
  Patch,
} from '@nestjs/common';

import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get('')
  // getUser(@Req() req) {
  //   return this.userService.getUser(req);
  // }
  // //   // backlog for now
  // @Post('')
  // addUser(@Req() req) {
  //   return this.userService.addUser(req);
  // }

  // @Put('')
  // updateUser(@Req() req) {
  //   return this.userService.updateUser(req);
  // }

  // //soft delete
  // @Delete('')
  // deleteUser(@Req() req) {
  //   return this.userService.deleteUser(req);
  // }
  @Patch('/addBookmark')
  addBookmark(@Req() req) {
    return this.userService.addBookmark(req);
  }
  @Patch('/removeBookmark')
  removeBookmark(@Req() req) {
    return this.userService.removeBookmark(req);
  }
}
