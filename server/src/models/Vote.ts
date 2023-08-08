import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  storyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'stories',
    required: true,
  },
  voterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  value: { type: Number, enum: [-1, 1, 0], required: true },
  timestamp: { type: Date, default: Date.now },
});
const Vote = mongoose.model('votes', voteSchema);
export default Vote;
