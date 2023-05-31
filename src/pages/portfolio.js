import { Grid, Typography } from '@mui/material';
import PortfolioCarousel from '../organisms/portfolio-carousel';
import { ThickDivider } from '../atoms/divider';

// TODO: Get actual height of page and not a guess!
export default function Portfolio() {
  return (
    <Grid container justifyContent="center" style={{ marginTop: '2%' }}>
      <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>
          my work ✏️
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <PortfolioCarousel />
        <br />
        <ThickDivider />
      </Grid>
      <Grid item xs={0} md={2}></Grid>
    </Grid>
  );
}
