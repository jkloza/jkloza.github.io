import { Grid, Typography } from '@mui/material';
import PortfolioCarousel from '../organisms/portfolio-carousel';

export default function Portfolio() {
  return (
    <Grid container>
      <Grid item sx={{ marginLeft: 8, marginTop: 2 }} xs={2}>
        <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>
          work
        </Typography>
      </Grid>
      <Grid item>
        <PortfolioCarousel />
      </Grid>
    </Grid>
  );
}
