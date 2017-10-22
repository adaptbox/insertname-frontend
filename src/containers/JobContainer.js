import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import JobComponent from '../components/private/JobComponent';
import * as jobActions from '../redux/actions/jobActions';

const JobContainer = (props) => {
  props.jobActions.getJobsForUser();
  return (
    <div>
      <JobComponent
        jobReducer={props.jobReducer}
      />
    </div>
  );
};

JobContainer.propTypes = {
  jobReducer: PropTypes.object.isRequired,
  jobActions: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    jobReducer: state.jobReducer,
  }),
  dispatch => ({
    jobActions: bindActionCreators(jobActions, dispatch),
  }),
)(JobContainer);
