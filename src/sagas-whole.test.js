import {loadProfileSaga} from './sagas';
import * as selectors from './selectors';
import * as api from './api';
import {recordSaga} from './TestUtils';
import {loadProfileFailure, loadProfileSuccess} from './actionCreators';

describe.only('loadProfileSaga', () => {

  api.getProfile = jest.fn();
  selectors.isAuthenticated = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fail if not authenticated', async () => {
    selectors.isAuthenticated.mockImplementation(() => false);

    const initialAction = {profileId: 1};
    const dispatched = await recordSaga(
      loadProfileSaga,
      initialAction
    );

    expect(dispatched).toContainEqual(loadProfileFailure());
    expect(api.getProfile).not.toHaveBeenCalled();
  });

  it('should get profile from API and call success action if authenticated', async () => {
    const someProfile = {name: 'Guy Incognito'};
    api.getProfile.mockImplementation(() => someProfile);
    selectors.isAuthenticated.mockImplementation(() => true);

    const initialAction = {profileId: 1};
    const dispatched = await recordSaga(
      loadProfileSaga,
      initialAction
    );

    expect(api.getProfile).toHaveBeenCalledWith(1);
    expect(dispatched).toContainEqual(loadProfileSuccess(someProfile));
  });
});
