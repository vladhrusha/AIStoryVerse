import User from '../../models/User';

import mongoose from 'mongoose';

// select
export const getByNickname = (nickname) => {
  return User.findOne({ nickname });
};
export const getByGoogleId = async (googleId) => {
  return await User.findOne({ googleId: googleId });
};
export const getAllUsers = async () => {
  return await User.find();
};
// insert
export const addBookmark = async ({ storyId, googleId }) => {
  await User.updateOne(
    { googleId: googleId },
    { $addToSet: { bookmarks: storyId } },
  );
};
//   // backlog for now
// export const addUser = ({ nickname, firstname, lastname, password, salt }) => {
//   const newUser = new User({
//     nickname,
//     firstname,
//     lastname,
//     password,
//     salt,
//   });
//   newUser.save();
// };

// // update
// export const updateUser = ({
//   nickname,
//   lastname,
//   firstname,
//   updated_at,
//   encryptedPassword,
// }) => {
//   User.updateOne(
//     { nickname },
//     {
//       $set: {
//         lastname,
//         firstname,
//         password: encryptedPassword,
//         updated_at,
//       },
//     },
//   );
// };
// delete
export const removeBookmark = async ({ storyId, googleId }) => {
  await User.updateOne(
    { googleId: googleId },
    { $pull: { bookmarks: storyId } },
  );
};
// export const deleteUserByNickname = async ({ nickname, deleted_at }) => {
//   await User.updateOne(
//     { nickname },
//     {
//       $set: {
//         deleted_at,
//       },
//     },
//   );
// };
