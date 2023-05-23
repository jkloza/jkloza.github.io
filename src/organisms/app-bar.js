import { AppBar, Toolbar, Container } from '@mui/material';
import { NavMenu } from '../navigation/nav-menu';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: '#111D4A' }}>
        <Toolbar sx={{ backgroundColor: '#111D4A' }}>
          <NavMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
