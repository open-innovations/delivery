import { derived, writable } from 'svelte/store';
import { getAccount, msalInstance } from '../lib/auth';
import { EventType } from '@azure/msal-browser';

function createSessionStore() {
  const { subscribe, set } = writable(null);
  set(getAccount());

  msalInstance.addEventCallback((evt) => {
    const { eventType } = evt;
    switch (eventType) {
      case EventType.LOGIN_SUCCESS:
      case EventType.LOGOUT_SUCCESS:
        set(getAccount());
        break;
      default:
    }
  });
  
  return {
    subscribe,
  }
}

const session = createSessionStore();

export const userFullName = derived(session, $s => $s ? $s.name : undefined);
export const isAuthenticated = derived(session, $s => Boolean($s));