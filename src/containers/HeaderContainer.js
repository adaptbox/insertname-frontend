import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/userActions';
import Header from '../components/public/Header';
import ErrorModal from '../components/public/ErrorModal';

class HeaderContainer extends React.Component {
  login = (credentials) => {
    this.props.userActions.login(credentials);
  }

  signup = (user) => {
    this.props.userActions.signup(user);
  }

  logout = () => {
    this.props.userActions.logout();
    localStorage.removeItem('authToken'); // eslint-disable-line
    localStorage.removeItem('user'); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <Header
          login={this.login}
          signup={this.signup}
          logout={this.logout}
          user={this.props.userReducer}
        />
        {/* An example of how to add an error modal, it's the containers responsibility
        to show/not show this modal */}
        {this.props.userReducer && this.props.userReducer.error ?
          <ErrorModal error={this.props.userReducer.error} /> :
          null
        }
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  userActions: PropTypes.object.isRequired,
  userReducer: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    userReducer: state.userReducer,
  }),
  dispatch => ({
    userActions: bindActionCreators(userActions, dispatch),
  }),
)(HeaderContainer);
