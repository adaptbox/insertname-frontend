import React from 'react';
import PropTypes from 'prop-types';

const styles = {
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Grid = (props) => {
  return (
    <div>
      {
        props.jobReducer.jobs.map(job => (
          <div>{job.id}:{job.year}:{job.make}:{job.model}:{job.description}</div>
        ))
      }
    </div>
  );
};

Grid.propTypes = {
  jobReducer: PropTypes.object.isRequired,
};

export default Grid;
