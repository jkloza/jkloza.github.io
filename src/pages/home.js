import { useContext } from 'react';
import { ThemeModeContext } from '../context';
import HelloComponent from '../molecules/hellos';
import { Typography, Grid } from '@mui/material';
import OrangeCircle from '../assets/orange-circle';
import ClickableCard from '../molecules/clickable-card';
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
    <Grid container justifyContent="center" item xs={12} style={{ marginTop: '2%' }}>
      <Grid item xs={6}>
        {/* <OrangeCircle height={100} width={100} /> */}
        <img
          src={lightMode ? juliFun : juli}
          alt="headshot of juli"
          height={350}
          width={350}
          style={{ position: 'absolute' }}
        />
        {/* <OrangeCircle /> */}
      </Grid>
      {/* <Grid item xs={12} style={{ marginLeft: 100 }}>
          <OrangeCircle height={200} width={200} />
        </Grid> */}
      <Grid item xs={6}>
        <div style={headingStyles}>
          <HelloComponent />
        </div>
        <Typography variant="h5">
          I’m Juli, a{' '}
          <Typography component="span" variant="h5" sx={{ fontWeight: 700 }} color="secondary">
            full-stack developer
          </Typography>{' '}
          located in Boston, Massachusetts.{' '}
        </Typography>
        <br />
        <br />
      </Grid>
    </Grid>
  );
}
