export const environment = {
  production: true,
  version: '0.0.0',
  baseApiUrl: 'http://localhost:3000',
  apiProvider: '/api',
  apiVersion: '/v1',
  serverUrl: '',
};
environment.serverUrl = `${environment.baseApiUrl}${environment.apiProvider}${environment.apiVersion}`;