import { useState } from 'react';
import { projects } from '../data/portfolio';
import PortfolioCard2 from '../molecules/portfolio-card-2';
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
      <Grid container direction="column" spacing={3}>
        {projects.map((project) => {
          const { id, title, description, tags, preview } = project;
          return (
            <PortfolioCard2
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
  // return (
  //   <>
  //     <Grid container sx={{ marginLeft: 10 }} spacing={10}>
  //       {projects.map((project) => {
  //         return (
  //           <Grid item key={project.title} xs={10}>
  //             <PortfolioCard2
  //               id={project.id}
  //               title={project.title}
  //               description={project.description}
  //               tags={project.tags}
  //               onClick={handleOpenProject}
  //             />
  //           </Grid>
  //         );
  //       })}
  //     </Grid>
  //     {openProject && <ProjectModal project={project} handleClose={handleCloseProject} />}
  //   </>
  // );
}
