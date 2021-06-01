export const getApiRequestId: () => string = (): string =>
  `${Date.now()}_${Math.random() * 1_000}`;
