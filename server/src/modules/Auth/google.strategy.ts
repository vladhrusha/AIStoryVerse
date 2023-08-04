import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import devKeys from '../../config/dev';
import mongoose from 'mongoose';
import '../../models/User';

const User = mongoose.model('users');

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: devKeys.googleClientID,
      clientSecret: devKeys.googleClientSecret,
      callbackURL: '/auth/google/callback', // probably must start with localhost unlike in regular passport, note /auth for proxy
      scope: ['email', 'profile'],
      proxy: true,
      session: true,
    });
  }
  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    // move saving to services
    // https://dev.to/imichaelowolabi/how-to-implement-login-with-google-in-nest-js-2aoa#:~:text=We%20could%20easily,Route%2C%20and%20Service
    const existingUser = await User.findOne({ googleId: profile.id });
    if (existingUser) {
      done(null, { userData: existingUser, accessToken: _accessToken }); //first argument is for error
    } else {
      const user = await new User({ googleId: profile.id }).save();
      done(null, { userData: user, accessToken: _accessToken });
    }
  }
}
