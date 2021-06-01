import bridge from '@vkontakte/vk-bridge';

import { getApiRequestId } from '@bridge/utils/getApiRequestId';

interface IBridgeFetch {
  method: string;
  request_id: string;
  params: {
    access_token: string;
    v: string;
  };
}

export const bridgeFetch = (methodName: string, params: Record<string, any>) =>
  bridge.send('VKWebAppCallAPIMethod', {
    method: methodName,
    request_id: getApiRequestId(),
    params: {
      // access_token: window.accessToken,
      v: '5.130',
      ...params,
    },
  } as IBridgeFetch);
