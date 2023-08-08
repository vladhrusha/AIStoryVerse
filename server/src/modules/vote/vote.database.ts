import mongoose from 'mongoose';

import Vote from '../../models/Vote';
import Story from '../../models/Story';

import logger from '../../../tools/logger';

export const addVote = async ({ value, userId, storyId }) => {
  const vote = await Vote.findOne({ storyId: storyId, voterId: userId });

  const fiveSecondsAgo = new Date(Date.now() - 5 * 1000);

  if (vote.timestamp > fiveSecondsAgo)
    return 'You can only vote once per 5 seconds';
  if (vote.timestamp)
    if (!vote) {
      const newVote = new Vote({
        storyId: storyId,
        voterId: userId,
        value,
      });
      await newVote.save();
      return 'voted created';
    } else {
      vote.value = value;
      vote.timestamp = new Date(Date.now());
      await vote.save();
      return 'vote updated';
    }
};

export const calculateRatings = async () => {
  const stories = await Story.find();
  for (const story of stories) {
    const updatedVotes = await Vote.find({ storyId: story.id });
    const newRating = updatedVotes.reduce(
      (total, vote) => total + vote.value,
      0,
    );
    story.rating = newRating;
    await story.save();
  }
};
