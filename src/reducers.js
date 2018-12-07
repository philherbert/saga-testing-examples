import {AUTHENTICATE, LOAD_PROFILE_FAILURE, LOAD_PROFILE_SUCCESS, UNAUTHENTICATE} from './actions';

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

const DEFAULT_PROFILE_STATE = null;

export function profileReducer(state = DEFAULT_PROFILE_STATE, action) {
  switch (action.type) {
    case LOAD_PROFILE_SUCCESS:
      return action.profile;
    case LOAD_PROFILE_FAILURE:
      return DEFAULT_PROFILE_STATE;
    default:
      return state;
  }
}