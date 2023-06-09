import { useState } from 'react';
import { projects } from '../data/portfolio';
import PortfolioCard from '../molecules/portfolio-card';
import { Grid } from '@mui/material';
import ProjectModal from './project-modal';
import './portfolio.css';

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
      <Grid container direction="column" spacing={4} className="radio-btns">
        {projects.map((project) => {
          const { id, title, description, tags, preview } = project;
          return (
            <PortfolioCard
              id={id}
              title={title}
              key={title}
              preview={preview}
              description={description}
              tags={tags}
              onClick={handleOpenProject}
            />
          );
        })}
      </Grid>
      {openProject && <ProjectModal project={project} handleClose={handleCloseProject} />}
    </>
  );
}
