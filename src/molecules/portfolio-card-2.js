import { PropTypes } from 'prop-types';
import { Chip, Typography, Divider, Grid } from '@mui/material';

export default function PortfolioCard2({ id, title, preview, description, tags, onClick }) {
  return (
    <div onClick={onClick}>
      <Grid item container direction="row">
        <Grid item xs={4}>
          <img src={preview.img} alt={preview.alt} />
        </Grid>
        <Grid item xs={8} container spacing={2} direction="column">
          <Grid item>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{description}</Typography>
          </Grid>
          <Grid item>
            {tags.length &&
              tags.map((tag) => {
                return <Chip key={tag} label={tag} />;
              })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ margin: 10, borderBottomWidth: 2 }} />
        </Grid>
      </Grid>
    </div>
  );
}

PortfolioCard2.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.obj,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  onClick: PropTypes.func
};
