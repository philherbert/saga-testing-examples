import {AUTHENTICATE, LOAD_PROFILE, LOAD_PROFILE_FAILURE, LOAD_PROFILE_SUCCESS, UNAUTHENTICATE} from './actions';

export function loadProfileSuccess(profile) {
  return {
    type: LOAD_PROFILE_SUCCESS,
    profile
  };
}

export function loadProfileFailure() {
  return {
    type: LOAD_PROFILE_FAILURE
  };
}

export function loadProfile() {
  return {
    type: LOAD_PROFILE
  }
}

export function authenticate() {
  return {
    type: AUTHENTICATE
  }
}

export function unauthenticate() {
  return {
    type: UNAUTHENTICATE
  }
}