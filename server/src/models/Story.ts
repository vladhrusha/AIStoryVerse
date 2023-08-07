import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  authorid: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  mainMood: { type: String, required: true },
  secondaryMoods: [{ type: String, required: false }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: null },
  deleted_at: { type: Date, default: null },
  rating: { type: Number, default: 0 }, // ?
});
const Story = mongoose.model('stories', storySchema);
export default Story;
