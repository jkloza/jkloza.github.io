import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Tab,
  Divider,
  IconButton
} from '@mui/material';
import { NavMenu } from '../navigation/nav-menu';
import { Link } from 'react-router-dom';
import LightDarkToggle from '../molecules/light-dark-toggle';
import MenuIcon from '@mui/icons-material/Menu';

const ResponsiveAppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;
  const pages = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Portfolio', link: '/portfolio' }
  ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'background.default' }}>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page.link}>
            <ListItemButton sx={{ textAlign: 'center', justifyContent: 'center' }}>
              <Tab
                label={page.label}
                to={page.link}
                component={Link}
                key={page.link}
                sx={{
                  '&:hover': {
                    color: '#40a9ff',
                    opacity: 1
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" elevation={0} component="nav">
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
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}>
                  <MenuIcon sx={{ color: 'primary.main' }} />
                </IconButton>
                <NavMenu />
              </Toolbar>
            </Grid>
            <Grid item>
              <LightDarkToggle />
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: 'background.default'
            }
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default ResponsiveAppBar;
