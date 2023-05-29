import { useContext } from 'react';
import { ThemeModeContext } from '../context';
import { Typography, Grid, Divider } from '@mui/material';
import juli from '../assets/juli-1.png';
import juliFun from '../assets/juli-fun.png';

// Styles
const headingStyles = {
  marginTop: '10%',
  marginBottom: 30
};

// TODO: Get actual height of page and not a guess!
export default function About() {
  const { mode } = useContext(ThemeModeContext);
  const lightMode = mode === 'light';

  return (
    <Grid container justifyContent="center" style={{ marginTop: '2%' }}>
      <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={lightMode ? juliFun : juli} alt="headshot of juli" height={350} width={350} />
      </Grid>
      <Grid item xs={6} md={4}>
        <div style={headingStyles}>
          <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>
            it’s me! hi! 🤸‍♀️
          </Typography>
        </div>
        <ul>
          <li>
            <Typography variant="h5" color="text.primary" sx={{ fontWeight: 700 }}>
              software engineer at freight farms
            </Typography>
          </li>
          <li>
            <Typography variant="h5" color="text.primary" sx={{ fontWeight: 700 }}>
              graduated from northeastern university in 2019 with a degree in computer engineering
            </Typography>
          </li>
          <li>
            <Typography variant="h5" color="text.primary" sx={{ fontWeight: 700 }}>
              self-proclaimed hobby girlie. i am a dabbler. hobbies i’ve started over the years:
              gardening, reading, hiking, knitting, sourdough, ukelele
            </Typography>
          </li>
        </ul>
        <br />
        <Divider sx={{ borderBottomWidth: 2 }} />
      </Grid>
      <Grid item xs={0} md={2}></Grid>
    </Grid>
  );
}
