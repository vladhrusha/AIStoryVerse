import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: false, unique: true },
  facebookId: { type: String, required: false, unique: true },
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  password: { type: String, required: false },
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'stories' }],
  salt: { type: String, required: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: null },
  deleted_at: { type: Date, default: null },
  role: { type: String, enum: ['user', 'moderator', 'admin'], default: 'user' },
});
const User = mongoose.model('users', userSchema);
export default User;
