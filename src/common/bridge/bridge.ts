import bridge, {
  AnyReceiveMethodName,
  VKBridgeEvent,
} from '@vkontakte/vk-bridge';

import { webAppUpdateConfig } from '@common/bridge/subscribers/webAppUpdateConfig';

void bridge.send('VKWebAppInit');

bridge.subscribe((e: VKBridgeEvent<AnyReceiveMethodName>) => {
  switch (e.detail.type) {
    case 'VKWebAppUpdateConfig':
      webAppUpdateConfig(e.detail.data.scheme);
      break;

    default:
  }
});
