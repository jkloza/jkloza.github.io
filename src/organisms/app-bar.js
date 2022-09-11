import React from 'react';
import {AppBar, Toolbar, Container} from '@mui/material'
import { NavMenu } from '../navigation/nav-menu';

const ResponsiveAppBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
