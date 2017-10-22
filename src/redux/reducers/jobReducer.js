import * as types from '../ActionTypes';

const jobState = {
  jobs: [],
};

const jobReducer = (state = jobState, action) => {
  switch (action.type) {
    case types.JOB_CREATION_FAILED:
      return state;
    case types.JOB_CREATION_SUCCESS:
      return Object.assign({}, state, {
        jobs: state.jobs.concat([action.job]),
      });
    case types.JOB_FETCH_FAILED:
      return state;
    case types.JOB_FETCH_SUCCESS:
      return Object.assign({}, state, {
        jobs: action.jobs,
      });
    default:
      return state;
  }
};

export default jobReducer;
