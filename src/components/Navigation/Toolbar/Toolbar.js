import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggel from '../SideDrawer/DrawerToggel/DrawerToggel';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggel clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <nav className={classes.DestopOnly}>
      <NavigationItems/>
    </nav>
  </header>
);

export default toolbar;