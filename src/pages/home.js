import HelloComponent from '../molecules/Hellos';
import { Typography, Grid } from '@mui/material';
import OrangeCircle from '../assets/orange-circle';
import ClickableCard from '../molecules/ClickableCard';
import juli from '../assets/juli-transparent.png';
import './home.css';

// Styles
const headingStyles = {
  marginTop: '10%',
  marginBottom: 30,
  maxWidth: 320
};

// TODO: Get actual height of page and not a guess!
export default function Home() {
  const cardContent =
    'This is a sample of the main text that will go in this box. If you click the box, it will flip around and say something else, like a secret little joke.';
  return (
    <>
      <Grid container justifyContent="center" item xs={6} style={{ marginTop: '2%' }}>
        <Grid item xs={8}>
          <OrangeCircle height={100} width={100} />
          <img
            src={juli}
            alt="headshot of juli"
            height={350}
            width={350}
            style={{ position: 'absolute' }}
          />
          <OrangeCircle />
        </Grid>
        <Grid item xs={12} style={{ marginLeft: 100 }}>
          <OrangeCircle height={200} width={200} />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <div style={headingStyles}>
          <HelloComponent />
        </div>
        <Typography variant="h5">
          I’m Juli, a full-stack software engineer located in Boston, Massachusetts.{' '}
        </Typography>
        <br />
        <br />
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <ClickableCard content={cardContent} styles={{ maxWidth: 345 }} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
