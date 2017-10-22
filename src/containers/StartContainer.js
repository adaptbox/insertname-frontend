import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/userActions';
import * as jobActions from '../redux/actions/jobActions';
import StartComponent from '../components/private/StartComponent';

class StartContainer extends React.Component {
  createJob = (job) => {
    this.props.jobActions.createJob(job);
  }

  render() {
    return (
      <div>
        <StartComponent
          user={this.props.userReducer}
          createJob={this.createJob}
        />
      </div>
    );
  }
}

StartContainer.propTypes = {
  userReducer: PropTypes.object.isRequired,
  jobActions: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    userReducer: state.userReducer,
    jobReducer: state.jobReducer,
  }),
  dispatch => ({
    userActions: bindActionCreators(userActions, dispatch),
    jobActions: bindActionCreators(jobActions, dispatch),
  }),
)(StartContainer);
