import { Controller, Get, Req, Res } from '@nestjs/common';
import { LocalSerializer } from '../Auth/auth.serializer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const passport = require('passport');
import mongoose from 'mongoose';
const User = mongoose.model('users');

@Controller('/api')
export class APIController {
  constructor(private readonly localSerializer: LocalSerializer) {}

  @Get('/current_user')
  getCurrentUser(@Req() req, @Res() res) {
    console.log('current user');
    console.log(req.user);
    res.send(req.user);
  }
  @Get('/logout')
  onLogout(@Req() req, @Res() res) {
    req.logout();
    res.redirect('/');
  }
  @Get('/hello')
  getHello(@Req() req, @Res() res) {
    // return 'hello from hello';
    res.send({ message: 'hello' });
  }
}
