import mongoose from 'mongoose';

import Vote from '../../models/Vote';
import User from '../../models/User';
import Story from '../../models/Story';
import * as userDb from '../user/user.database';

import logger from '../../../tools/logger';
export const addVote = async ({ value, userId, storyId }) => {
  const story = await Story.findOne({ id: storyId });
  const vote = await Vote.findOne({ storyId: storyId, voterId: userId });

  const now = new Date();
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

  //   const recentVote = await Vote.findOne({
  //     storyId: storyId,
  //     voterId: userId,
  //     timestamp: { $lt: oneHourAgo },
  //   });

  if (!(vote && vote.timestamp)) {
    const newVote = new Vote({
      storyId: storyId,
      voterId: userId,
      value,
    });
    await newVote.save();
    return 'voted';
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
