export const webAppUpdateConfig = (scheme: string): void =>
  document.body.setAttribute('scheme', scheme ?? 'client_light');
