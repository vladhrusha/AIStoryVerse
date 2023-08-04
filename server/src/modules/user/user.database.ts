import User from '../../models/User';

import mongoose from 'mongoose';

export const deleteUserByNickname = async ({ nickname, deleted_at }) => {
  await User.updateOne(
    { nickname },
    {
      $set: {
        deleted_at,
      },
    },
  );
};

export const getByNickname = (nickname) => {
  return User.findOne({ nickname });
};

export const addUser = ({ nickname, firstname, lastname, password, salt }) => {
  const newUser = new User({
    nickname,
    firstname,
    lastname,
    password,
    salt,
  });
  newUser.save();
};

export const updateUser = ({
  nickname,
  lastname,
  firstname,
  updated_at,
  encryptedPassword,
}) => {
  User.updateOne(
    { nickname },
    {
      $set: {
        lastname,
        firstname,
        password: encryptedPassword,
        updated_at,
      },
    },
  );
};
