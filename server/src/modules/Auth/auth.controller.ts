import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleOAuthGuard } from './auth.guard';

@Controller('/auth/google')
export class AuthController {
  // auth/google
  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Req() req) {
    return;
  }
  // auth/google/callback
  @Get('/callback')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Req() req, @Res() res) {
    res
      .cookie('access_token', req.user.accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), //3 days
      })
      .send({ status: 'ok' });
  }
}
