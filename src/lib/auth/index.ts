// https://auth0.com/blog/authenticating-svelte-apps/
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: '729075f3-de08-4e95-9b85-c668d381fa73',
    authority: 'https://login.microsoftonline.com/5761859f-ee63-474e-8746-4ddcc0d3e9e5',
    redirectUri: window.location.href,
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);

export function getAccount() {
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length === 1) {
    return accounts[0];
  }
  if (accounts.length > 1) {
    throw 'Too many accounts!';
  }

  return null;
}

const loginRequest = { scopes: [] };

export async function login() {
  await msalInstance.loginPopup(loginRequest);
}

export async function logout() {
  await msalInstance.logoutRedirect({
    onRedirectNavigate: () => false,
  });
}