import { projects } from '../data/portfolio';
import PortfolioCard from '../molecules/portfolio-card';
import { Grid } from '@mui/material';

export default function PortfolioCarousel() {
  return (
    <Grid container>
      {projects.map((project) => {
        return (
          <Grid item key={project.title}>
            <PortfolioCard
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
