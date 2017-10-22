import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import { grey100, grey600, grey900, lightBlueA400 } from 'material-ui/styles/colors';
import MessageIcon from 'material-ui/svg-icons/communication/message';
import CarIcon from 'material-ui/svg-icons/maps/directions-car';
import QuoteIcon from 'material-ui/svg-icons/action/assessment';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

const height = '40px';
const styles = {
  nav: {
    backgroundColor: grey600,
    borderTop: '2px solid',
    borderColor: lightBlueA400,
    display: 'block',
    padding: '0 20%',
  },
  title: {
    color: grey900,
    height,
    display: 'none',
  },
  titleLink: {
    textDecoration: 'none',
  },
  tabItemContainer: {
    backgroundColor: grey600,
  },
  inkBar: {
    background: grey100,
    height: '5px',
  },
  tab: {
    color: grey100,
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
};

const currentRouteIndex = () => {
  const hash = window.location.hash; // eslint-disable-line
  switch (true) {
    case hash.includes('/private/start'): return 0;
    case hash.includes('/private/jobs'): return 1;
    case hash.includes('/private/quotes'): return 2;
    default: return 0;
  }
};

const Header = () => {
  return (
    <AppBar
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
          className="c-userHeader__tab"
          style={styles.tab}
          buttonStyle={styles.tabButton}
          icon={<IconButton className="c-userHeader__tabIcon"><MessageIcon color={grey100} /></IconButton>}
          label={<span className="c-userHeader__tabText">Post a Job</span>}
          containerElement={<Link to="/private/start" />}
        />
        <Tab
          className="c-userHeader__tab"
          style={styles.tab}
          buttonStyle={styles.tabButton}
          icon={<IconButton className="c-userHeader__tabIcon"><CarIcon color={grey100} /></IconButton>}
          label={<span className="c-userHeader__tabText">My Jobs</span>}
          containerElement={<Link to="/private/jobs" />}
        />
        <Tab
          className="c-userHeader__tab"
          style={styles.tab}
          buttonStyle={styles.tabButton}
          icon={<IconButton className="c-userHeader__tabIcon"><QuoteIcon color={grey100} /></IconButton>}
          label={<span className="c-userHeader__tabText">My Quotes</span>}
          containerElement={<Link to="/private/quotes" />}
        />
        {/* <Tab
          className="c-userHeader__tab"
          style={styles.tab}
          buttonStyle={styles.tabButton}
          icon={<IconButton className="c-userHeader__tabIcon"><DashboardIcon color={grey100} /></IconButton>}
          label={<span className="c-userHeader__tabText">Dashboard</span>}
          containerElement={<Link to="/private/quotes" />}
        /> */}
        {/* <Tab
          className="c-userHeader__tab"
          style={styles.tab}
          buttonStyle={styles.tabButton}
          icon={<IconButton className="c-userHeader__tabIcon"><SettingsIcon color={grey100} /></IconButton>}
          label={<span className="c-userHeader__tabText">Account</span>}
          containerElement={<Link to="/private/quotes" />}
        /> */}
      </Tabs>
    </AppBar>
  );
};

export default Header;
