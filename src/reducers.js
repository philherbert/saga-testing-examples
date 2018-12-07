import {AUTHENTICATE, UNAUTHENTICATE} from './actions';

const DEFAULT_AUTHENTICATED_STATE = false;

export function authenticatedReducer(state = DEFAULT_AUTHENTICATED_STATE, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return true;
    case UNAUTHENTICATE:
      return false;
    default:
      return state;
  }
}
