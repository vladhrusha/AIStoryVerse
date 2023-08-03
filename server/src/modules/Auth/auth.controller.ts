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
    return {
      message: 'Successfully logged in via Google',
      user: req.user,
    };
  }
}
