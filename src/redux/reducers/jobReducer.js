import * as types from '../ActionTypes';

const jobState = {
  jobs: [],
};

const jobReducer = (state = jobState, action) => {
  switch (action.type) {
    case types.JOB_CREATION_FAILED:
      return Object.assign({}, state, {});
    case types.JOB_CREATION_SUCCESS:
      return Object.assign({}, state, {
        jobs: state.jobs.concat([action.job]),
      });
    default:
      return state;
  }
};

export default jobReducer;
