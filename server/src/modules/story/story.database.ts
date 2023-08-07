import logger from '../../../tools/logger';
import Story from '../../models/Story';

export const addStory = async ({
  authorid,
  title,
  content,
  mainMood,
  secondaryMoods,
}) => {
  const newStory = new Story({
    authorid,
    title,
    content,
    mainMood,
    secondaryMoods,
  });
  newStory.save();
};
// get
export const getStory = async (storyid) => {
  return await Story.findOne({ _id: storyid });
};
export const getStories = async ({ offset, limit }) => {
  const stories = await Story.find().skip(offset).limit(limit);
  const storiesCount = await Story.countDocuments();
  return { stories, storiesCount };
};

export const getNBestStoriesAllTime = async (count) => {
  const bestStories = await Story.find().sort({ rating: -1 }).limit(count);
  return bestStories;
};
export const getNBestStoriesLast7Days = async (count) => {
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);
  const bestStories = await Story.find({ created_at: { $gt: sevenDaysAgo } })
    .sort({ rating: -1 })
    .limit(count);
  return bestStories;
};
// delete
export const deleteStory = async (storyId) => {
  await Story.deleteOne({ _id: storyId });
};
