import React from 'react';
import PropTypes from 'prop-types';
import StartForm from './StartForm';

const StartComponent = (props) => {
  const name = props.user.currentUser ? props.user.currentUser.name : null;
  return (
    <div className="c-start__container">
      <h1 className="c-start__description">
        Hi, {name}! Let&#39;s get
        started by describing your car repair needs.
      </h1>
      <StartForm createJob={props.createJob} />
    </div>
  );
};

StartComponent.propTypes = {
  user: PropTypes.object,
  createJob: PropTypes.func.isRequired,
};

export default StartComponent;
