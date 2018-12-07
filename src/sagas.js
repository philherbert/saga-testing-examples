import {call, put, select, takeEvery} from 'redux-saga/effects';
import {isAuthenticated} from './selectors';
import {loadProfileFailure, loadProfileSuccess} from './actionCreators';
import {getProfile} from './api';
import {LOAD_PROFILE} from './actions';

export function* loadProfileSaga(action) {
  const authenticated = yield select(isAuthenticated);
  if (authenticated) {
    const profile = yield call(getProfile, action.profileId);

    yield put(loadProfileSuccess(profile));
  } else {
    yield put(loadProfileFailure());
  }
}

export const sagas = [
  takeEvery(LOAD_PROFILE, loadProfileSaga)
];