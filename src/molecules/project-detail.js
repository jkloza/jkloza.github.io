import { PropTypes } from 'prop-types';
import { Typography, Grid, Button } from '@mui/material';

export default function ProjectDetail({ content, header, link }) {
  return (
    <Grid item>
      {header && (
        <Typography variant="body1" sx={{ fontWeight: '700' }}>
          {header}
        </Typography>
      )}
      <Typography variant="body1" align="justify">
        {content}
      </Typography>
      {link && (
        <a href={link.src} target="_blank" rel="noreferrer">
          <Button variant="outlined" sx={{ marginTop: 1 }}>
            {link.label}
          </Button>
        </a>
      )}
    </Grid>
  );
}

ProjectDetail.propTypes = {
  content: PropTypes.string.isRequired,
  header: PropTypes.string,
  link: PropTypes.object
};
