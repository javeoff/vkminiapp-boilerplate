import bridge from '@vkontakte/vk-bridge';

export const webAppInit = () => bridge.send('VKWebAppInit');
