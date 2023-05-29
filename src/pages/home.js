import { useContext } from 'react';
import { ThemeModeContext } from '../context';
import HelloComponent from '../molecules/hellos';
import { Typography, Grid, Divider } from '@mui/material';
import juli from '../assets/juli-1.png';
import juliFun from '../assets/juli-fun.png';

// Styles
const headingStyles = {
  marginTop: '10%',
  marginBottom: 30
};

// TODO: Get actual height of page and not a guess!
export default function Home() {
  const { mode } = useContext(ThemeModeContext);
  const lightMode = mode === 'light';

  return (
    <Grid container justifyContent="center" style={{ marginTop: '2%' }}>
      <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={lightMode ? juliFun : juli} alt="headshot of juli" height={350} width={350} />
      </Grid>
      <Grid item xs={6} md={4}>
        <div style={headingStyles}>
          <HelloComponent />
        </div>
        <Typography variant="h5" color="text.primary" sx={{ fontWeight: 700 }}>
          i’m juli, a{' '}
          <Typography component="span" variant="h5" sx={{ fontWeight: 700 }} color="primary">
            full-stack developer
          </Typography>{' '}
          located in boston, massachusetts. welcome to my page!{' '}
        </Typography>
        <br />
        <Divider sx={{ borderBottomWidth: 2 }} />
      </Grid>
      <Grid item xs={0} md={2}></Grid>
    </Grid>
  );
}
