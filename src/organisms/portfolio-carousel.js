import { useState } from 'react';
import { projects } from '../data/portfolio';
import PortfolioCard from '../molecules/portfolio-card';
import { Grid } from '@mui/material';
import ProjectModal from './project-modal';

export default function PortfolioCarousel() {
  const [openProject, setOpenProject] = useState(false);
  const [project, setProject] = useState(null);
  const handleOpenProject = (project) => {
    setOpenProject(true);
    setProject(project);
  };
  const handleCloseProject = () => {
    setOpenProject(false);
    setProject(null);
  };
  return (
    <>
      <Grid container sx={{ marginLeft: 10 }} spacing={10}>
        {projects.map((project) => {
          return (
            <Grid item key={project.title} xs={10}>
              <PortfolioCard
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                onClick={handleOpenProject}
              />
            </Grid>
          );
        })}
      </Grid>
      {openProject && <ProjectModal project={project} handleClose={handleCloseProject} />}
    </>
  );
}
