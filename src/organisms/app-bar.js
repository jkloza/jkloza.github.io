import { AppBar, Toolbar, Container, Grid } from '@mui/material';
import { NavMenu } from '../navigation/nav-menu';
import LightDarkToggle from '../molecules/light-dark-toggle';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          bgcolor: 'background.default'
        }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Toolbar>
              <NavMenu />
            </Toolbar>
          </Grid>
          <Grid item>
            <LightDarkToggle />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
