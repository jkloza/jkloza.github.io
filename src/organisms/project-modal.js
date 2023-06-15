import { PropTypes } from 'prop-types';
import { Dialog, Grid, Card, CardHeader, CardContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { projects } from '../data/portfolio';
import Carousel from 'react-material-ui-carousel';
import ProjectDetail from '../molecules/project-detail';

export default function ProjectModal({ project, handleClose }) {
  const currentProject = projects.find((p) => p.id === project);

  const getProjectDetails = () => {
    return currentProject.details.map((project) => {
      return <ProjectDetail key={project.content} {...project} />;
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg">
      <Card
        sx={{
          bgcolor: 'background.default',
          boxShadow: 24,
          overflowY: 'scroll'
        }}>
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
        <CardContent sx={{ marginLeft: 10, marginRight: 10 }}>
          <Grid container spacing={1}>
            {currentProject.details?.length && getProjectDetails()}
          </Grid>
        </CardContent>
      </Card>
    </Dialog>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.object,
  handleClose: PropTypes.func
};
