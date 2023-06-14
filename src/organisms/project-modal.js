import { PropTypes } from 'prop-types';
import { Typography, Dialog, Grid } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { projects } from '../data/portfolio';
import Carousel from 'react-material-ui-carousel';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ProjectModal({ project, handleClose }) {
  const style = {
    bgcolor: 'background.default',
    boxShadow: 24,
    overflow: 'scroll'
  };

  const currentProject = projects.find((p) => p.id === project);

  const getProjectDetails = () => {
    return currentProject.details.map((project) => {
      return (
        <Grid item key={project.content}>
          {project.header && (
            <Typography variant="body1" sx={{ fontWeight: '700' }}>
              {project.header}
            </Typography>
          )}
          <Typography variant="body1" align="justify">
            {project.content}
          </Typography>
        </Grid>
      );
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg">
      <Card sx={style}>
        <CardHeader
          action={
            <IconButton aria-label="close" onClick={handleClose} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          }
          title={currentProject.title}
          titleTypographyProps={{ fontWeight: 700, textAlign: 'center', color: 'white' }}
          subheader={currentProject.createdFor}
          subheaderTypographyProps={{ textAlign: 'center', color: 'white' }}
          sx={{ backgroundColor: 'primary.main' }}
        />
        <div style={{ overflow: 'scroll' }}>
          <Carousel autoPlay={false} sx={{ justifyContent: 'center' }}>
            {currentProject.imgs.map((item, i) => (
              <img
                key={i}
                src={item}
                style={{
                  width: '80%',
                  height: '80%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            ))}
          </Carousel>
          {currentProject.demoLink && (
            <CardActions disableSpacing>
              <a href={currentProject.demoLink} target="_blank" rel="noreferrer">
                <IconButton aria-label="view">
                  <VisibilityIcon />
                </IconButton>
              </a>
            </CardActions>
          )}
          <CardContent sx={{ marginLeft: 10, marginRight: 10 }}>
            <Grid container spacing={1}>
              {currentProject.details?.length && getProjectDetails()}
            </Grid>
          </CardContent>
        </div>
      </Card>
    </Dialog>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.object,
  handleClose: PropTypes.func
};
