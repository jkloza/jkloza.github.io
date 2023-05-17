import { AppBar, Toolbar, Container } from '@mui/material';
import { NavMenu } from '../navigation/nav-menu';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ backgroundColor: 'white' }}>
          <NavMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
