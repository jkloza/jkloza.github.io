import HelloComponent from '../molecules/hellos';
import ProfileImageContainer from '../organisms/profile-image-container';
import { Typography, Grid, useMediaQuery, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ThickDivider } from '../atoms/divider';
import pdf from '../data/resume.pdf';

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  // Styles
  const headingStyles = {
    marginTop: matches ? '25%' : '0',
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
      <Grid item xs={6} md={4}>
        <div style={headingStyles}>
          <HelloComponent />
        </div>
        <Typography variant="h5" color="text.primary" sx={{ fontWeight: 700 }}>
          i&#39;m juli, a{' '}
          <Typography component="span" variant="h5" sx={{ fontWeight: 700 }} color="primary">
            full-stack developer
          </Typography>{' '}
          located in boston, massachusetts. welcome to my page!{' '}
        </Typography>
        <br />
        <ThickDivider />
        <br />
        <Grid item xs={12}>
          <a href={pdf} target="blank">
            <Button variant="contained">View My Resume</Button>
          </a>
        </Grid>
      </Grid>
      <Grid item xs={0} md={2}></Grid>
    </Grid>
  );
}
