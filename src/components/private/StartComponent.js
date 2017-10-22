import React from 'react';
import { RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';
// import { red500 } from 'material-ui/styles/colors';
import StartForm from './StartForm';

const styles = {
  mainButton: {
    marginTop: 20,
    padding: 5,
  },
  mainButtonLabel: {
    textTransform: 'none',
  },
};

const StartComponent = (props) => {
  const name = props.user.currentUser ? props.user.currentUser.name : null;
  return (
    <div className="c-start__container">
      <h1 className="c-start__description">
        Hi, {name}! Let&#39;s get
        started by describing your car repair needs.
      </h1>
      <StartForm />
      <RaisedButton
        label="Start getting quotes"
        secondary={true}
        style={styles.mainButton}
        labelStyle={styles.mainButtonLabel}
      />
    </div>
  );
};

StartComponent.propTypes = {
  user: PropTypes.object,
};

export default StartComponent;
