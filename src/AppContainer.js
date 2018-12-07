import {connect} from 'react-redux';
import App from './App';
import {bindActionCreators} from 'redux';
import {authenticate, loadProfile, unauthenticate} from './actionCreators';
import {isAuthenticated} from './selectors';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    authenticate,
    unauthenticate,
    loadProfile
  }, dispatch);
}

function mapStateToProps(store) {
  return {
    authenticated: isAuthenticated(store)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);