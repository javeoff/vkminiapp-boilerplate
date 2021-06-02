import bridge from '@vkontakte/vk-bridge';

import { getApiRequestId } from '@bridge/utils/getApiRequestId';
import { getAccessToken } from '@bridge/utils/getAccessToken';
import { TAnyObject } from '@common/types/TAny';

interface IBridgeFetch {
  method: string;
  request_id: string;
  params: {
    access_token: string;
    v: string;
  };
}

export type TCallApiMethodData<Response> = {
  response: Response;
};

export const bridgeFetch = <T>(
  methodName: string,
  params: TAnyObject,
): Promise<TCallApiMethodData<T>> =>
  bridge.send('VKWebAppCallAPIMethod', {
    method: methodName,
    request_id: getApiRequestId(),
    params: {
      access_token: getAccessToken(),
      v: '5.130',
      ...params,
    },
  } as IBridgeFetch);
