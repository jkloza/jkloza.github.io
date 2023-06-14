import { PropTypes } from 'prop-types';
import { Typography, Modal } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { projects } from '../data/portfolio';
import Carousel from 'react-material-ui-carousel';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export default function ProjectModal({ project, handleClose }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    maxHeight: '670px'
  };
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const currentProject = projects.find((p) => p.id === project);
  console.log(currentProject);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Card sx={style}>
        <CardHeader
          action={
            <IconButton aria-label="close" onClick={handleClose} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          }
          title={currentProject.title}
          titleTypographyProps={{ fontWeight: 700, textAlign: 'center', color: 'white' }}
          subheader="freight farms"
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
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {currentProject.demoLink && (
              <a href={currentProject.demoLink} target="_blank" rel="noreferrer">
                <IconButton aria-label="view">
                  <VisibilityIcon />
                </IconButton>
              </a>
            )}
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </Modal>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.object,
  handleClose: PropTypes.func
};
