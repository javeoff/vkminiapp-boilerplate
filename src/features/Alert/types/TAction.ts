export type TAction = {
  title: string;
  action?: VoidFunction;
  autoclose?: boolean;
  mode: 'cancel' | 'destructive' | 'default';
};
