import {call, put, select} from 'redux-saga/effects';
import {loadProfileSaga} from './sagas';
import {isAuthenticated} from './selectors';
import {loadProfileFailure, loadProfileSuccess} from './actionCreators';
import {getProfile} from './api';

describe('loadProfileSaga', () => {
  it('should fail if not authenticated', () => {
    const action = {profileId: 1};
    const gen = loadProfileSaga(action);

    expect(gen.next().value).toEqual(select(isAuthenticated));
    expect(gen.next(false).value).toEqual(put(loadProfileFailure()));
    expect(gen.next().done).toBeTruthy();
  });

  it('should get profile from API and call success action if authenticated', () => {
    const action = {profileId: 1};
    const gen = loadProfileSaga(action);

    const someProfile = {name: 'Guy Incognito'};

    gen.next();
    expect(gen.next(true).value).toEqual(call(getProfile, 1));
    expect(gen.next(someProfile).value).toEqual(put(loadProfileSuccess(someProfile)));
    expect(gen.next().done).toBeTruthy();
  });
});