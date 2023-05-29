import { Grid, Typography, Divider } from '@mui/material';
import PortfolioCarousel from '../organisms/portfolio-carousel';

// TODO: Get actual height of page and not a guess!
export default function Portfolio() {
  return (
    <Grid container justifyContent="center" style={{ marginTop: '2%' }}>
      <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>
          my work ✏️
        </Typography>
      </Grid>
      <Grid item xs={6} md={6}>
        <PortfolioCarousel />
        <br />
        <Divider sx={{ borderBottomWidth: 2 }} />
      </Grid>
      <Grid item xs={0} md={2}></Grid>
    </Grid>
  );
}
