import { bridgeFetch, TCallApiMethodData } from '@bridge/utils/bridgeFetch';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onSubscribed = (): Promise<TCallApiMethodData<boolean>> =>
  bridgeFetch('groups.isMember', { group_id: process.env.GROUP_ID });
