export interface Credential {
  accessToken: string;
  refreshToken: string;
  authenticated: boolean;
  permissions: string[];
  roles: any;
  userId: number;
  email: string;
  shouldRenewPassword: boolean;
  rememberMe?: boolean;
}
