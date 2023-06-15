import { Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ThickDivider } from '../atoms/divider';
import ProfileImageContainer from '../organisms/profile-image-container';

export default function About() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const headingStyles = {
    marginTop: matches ? '10%' : '0',
    marginBottom: 30
  };
  return (
    <Grid container justifyContent="center" sx={{ marginTop: '5%' }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{ display: 'flex', justifyContent: 'center', marginBottom: matches ? '10%' : '5%' }}>
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
