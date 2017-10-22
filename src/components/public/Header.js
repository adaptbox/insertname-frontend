import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import { grey600, grey900, lightBlueA400 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';

const height = '64px';
const styles = {
  nav: {
    backgroundColor: 'white',
  },
  title: {
    color: grey900,
    height,
  },
  titleLink: {
    textDecoration: 'none',
  },
  tabItemContainer: {
    backgroundColor: 'white',
  },
  inkBar: {
    background: lightBlueA400,
    height: '5px',
  },
  homeTab: {
    color: grey600,
    height,
    padding: '0 30px',
    fontWeight: 400,
    textTransform: 'none',
  },
  tab: {
    color: grey600,
    height,
    padding: '0 30px',
    fontWeight: 400,
    textTransform: 'none',
  },
  tabButton: {
    height,
  },
  tabButtonLabel: {
    textTransform: 'none',
  },
  titleIcon: {
    color: lightBlueA400,
  },
};

const currentRouteIndex = () => {
  const hash = window.location.hash; // eslint-disable-line
  switch (true) {
    case hash.includes('/private'): return 1;
    default: return 0;
  }
};

const Header = (props) => {
  return props.user.requestPending ?
    <AppBar
      title="Logging In..."
      showMenuIconButton={false}
      style={styles.nav}
      titleStyle={styles.title}
      zDepth={0}
    />
    : (
      <AppBar
        title={
          <Link style={styles.titleLink} to="/">
            <i style={styles.titleIcon} className="material-icons">build</i>
          </Link>
        }
        showMenuIconButton={false}
        style={styles.nav}
        titleStyle={styles.title}
        zDepth={0}
      >
        <Tabs
          tabItemContainerStyle={styles.tabItemContainer}
          inkBarStyle={styles.inkBar}
          initialSelectedIndex={currentRouteIndex()}
        >
          <Tab
            style={styles.homeTab}
            buttonStyle={styles.tabButton}
            label="Home"
            containerElement={<Link to="/" />}
          />
          {props.user.currentUser ?
            <Tab
              style={styles.tab}
              buttonStyle={styles.tabButton}
              label="My Stuff"
              containerElement={<Link to="/private" />}
            /> :
            null
          }
        </Tabs>
        {props.user.currentUser ? null : <SignupButton signup={props.signup} />}
        {props.user.currentUser ? null : <LoginButton login={props.login} />}
        {props.user.currentUser ?
          <FlatButton
            labelStyle={styles.tabButtonLabel}
            style={styles.tabButton}
            label="Logout"
            onClick={props.logout}
          /> : null
        }
      </AppBar>
    );
};

Header.propTypes = {
  login: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default Header;
