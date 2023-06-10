import { Typography, Grid } from '@mui/material';
import { ThickDivider } from '../atoms/divider';
import ProfileImageContainer from '../organisms/profile-image-container';

// Styles
const headingStyles = {
  marginTop: '10%',
  marginBottom: 30
};

export default function About() {
  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={12}
        md={6}
        style={{ display: 'flex', justifyContent: 'center', marginBottom: '10%' }}>
        <ProfileImageContainer />
      </Grid>
      <Grid item xs={6} md={5}>
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
        <ThickDivider />
      </Grid>
      <Grid item xs={0} md={1}></Grid>
    </Grid>
  );
}
