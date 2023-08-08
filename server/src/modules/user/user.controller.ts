import { Controller, Get, Post, Put, Delete, Req, Res } from '@nestjs/common';

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
}
