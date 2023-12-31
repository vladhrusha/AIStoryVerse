import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import devKeys from '../../config/dev';
import mongoose from 'mongoose';
import '../../models/User';
import { getByGoogleId } from '../user/user.database';
import logger from '../../../tools/logger';

const User = mongoose.model('users');

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: devKeys.googleClientID,
      clientSecret: devKeys.googleClientSecret,
      callbackURL: '/auth/google/callback',
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
    // NOTE move saving to services
    // https://dev.to/imichaelowolabi/how-to-implement-login-with-google-in-nest-js-2aoa#:~:text=We%20could%20easily,Route%2C%20and%20Service
    const existingUser = await getByGoogleId(profile.id);
    if (existingUser) {
      done(null, existingUser); //first argument is for error
    } else {
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  }
}
