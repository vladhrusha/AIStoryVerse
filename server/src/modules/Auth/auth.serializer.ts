import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import mongoose from 'mongoose';
import '../../models/User';

const User = mongoose.model('users');

@Injectable()
export class LocalSerializer extends PassportSerializer {
  async serializeUser(payload, done) {
    done(null, payload._id);
  }

  async deserializeUser(payload, done) {
    const userid = payload;
    const user = await User.findById(userid);
    done(null, user);
  }
}
