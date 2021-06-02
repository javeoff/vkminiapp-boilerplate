import { UserInfo } from '@vkontakte/vk-bridge';

import { bridgeFetch } from '@bridge/utils/bridgeFetch';

interface IFriends {
  id: number;
  first_name: string;
  last_name: string;
  photo_100: string;
}

interface IResponse {
  items: UserInfo[];
}

export const getFriends = async (
  user_id: number,
  count: number,
): Promise<IFriends[]> => {
  const data = await bridgeFetch<IResponse>('friends.get', {
    user_id,
    count,
    friends: 'photo_100',
  });

  return data.response.items.map((friend: IFriends) => ({
    id: friend.id,
    first_name: friend.first_name,
    last_name: friend.last_name,
    photo_100: friend.photo_100,
  }));
};
