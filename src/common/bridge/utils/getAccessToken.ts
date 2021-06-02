import { accessToken } from '@bridge/utils/setAccessToken';

export const getAccessToken = (): string => accessToken.value;
