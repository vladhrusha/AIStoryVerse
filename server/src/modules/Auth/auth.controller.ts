import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleOAuthGuard } from './auth.guard';
import { LocalSerializer } from './auth.serializer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
@Controller('/auth/google')
export class AuthController {
  constructor(private readonly localSerializer: LocalSerializer) {}

  // auth/google
  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Req() req) {
    console.log('fired googleAuth after guard');
    return { msg: 'logged in' };
  }
  // auth/google/callback
  @Get('/callback')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Req() req, @Res() res) {
    console.log('here at callback');
    console.log(req.user);
    res.redirect('/restricted');
  }
}
