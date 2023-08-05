import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleOAuthGuard } from './auth.guard';
import { LocalSerializer } from './auth.serializer';
import logger from '../../../tools/logger';
// eslint-disable-next-line @typescript-eslint/no-var-requires
@Controller('/auth/google')
export class AuthController {
  constructor(private readonly localSerializer: LocalSerializer) {}

  // auth/google
  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth() {
    return;
  }
  // auth/google/callback
  @Get('/callback')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Req() req, @Res() res) {
    res.redirect('/restricted');
  }
}
