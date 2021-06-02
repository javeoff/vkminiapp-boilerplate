import bridge from '@vkontakte/vk-bridge';

export const webAppInit = (): Promise<{ result: boolean }> =>
  bridge.send('VKWebAppInit');
