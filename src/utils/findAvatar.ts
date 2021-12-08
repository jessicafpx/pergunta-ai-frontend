import avatars from '../assets/avatars';

import { User } from '../models/user';

export const findAvatar = (user: User) => {
  const findedAvatar = avatars.find((item) => item.avatarName === user.avatar);
  if (findedAvatar) return findedAvatar?.src;

  return avatars[0].src;
};

export const findAvatarByString = (avatar: string) => {
  const findedAvatar = avatars.find((item) => item.avatarName === avatar);
  if (findedAvatar) return findedAvatar?.src;

  return avatars[0].src;
};

