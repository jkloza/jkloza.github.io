import { Grid, Typography } from '@mui/material';
import PortfolioCarousel from '../organisms/portfolio-carousel';

export default function Portfolio() {
  return (
    <Grid
      container
      style={{
        height: 660,
        background: '#F4D06F'
      }}>
      <Grid item sx={{ marginLeft: 10, marginTop: 10 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          work
        </Typography>
      </Grid>
      <Grid container item>
        <Grid item>
          <PortfolioCarousel />
        </Grid>
      </Grid>
    </Grid>
  );
}
