import { bridgeFetch } from '@bridge/utils/bridgeFetch';

const onSubscribed = (): Promise<any> =>
  bridgeFetch('groups.isMember', { group_id: process.env.GROUP_ID });
