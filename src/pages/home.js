import HelloComponent from '../molecules/hellos';
import ProfileImageContainer from '../organisms/profile-image-container';
import { Typography, Grid } from '@mui/material';
import { ThickDivider } from '../atoms/divider';

// Styles
const headingStyles = {
  marginTop: '25%',
  marginBottom: 30
};

// TODO: Get actual height of page and not a guess!
export default function Home() {
  return (
    <Grid container justifyContent="center" sx={{ marginTop: '5%' }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{ display: 'flex', justifyContent: 'center', marginBottom: '10%' }}>
        <ProfileImageContainer />
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
        <ThickDivider />
      </Grid>
      <Grid item xs={0} md={2}></Grid>
    </Grid>
  );
}
