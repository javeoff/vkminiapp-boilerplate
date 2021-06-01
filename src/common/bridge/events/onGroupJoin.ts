import bridge from '@vkontakte/vk-bridge';

const group_id: number | undefined = Number(process.env.GROUP_ID);

export const onGroupJoin = (): Promise<{ result: boolean }> =>
  bridge.send('VKWebAppJoinGroup', { group_id });
