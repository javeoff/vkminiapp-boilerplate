import { isGoBack, Router } from '@common/router/Router';

export const checkGoBack = (): boolean => {
  if (isGoBack.flag) {
    return Router.inBack();
  }

  return isGoBack.flag;
};
