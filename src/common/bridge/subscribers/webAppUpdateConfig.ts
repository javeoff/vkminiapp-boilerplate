export const webAppUpdateConfig = (scheme: string) =>
  document.body.setAttribute('scheme', scheme ?? 'client_light');
