import { PropTypes } from 'prop-types';
import { Chip, Typography, Grid } from '@mui/material';
import '../organisms/portfolio.css';

export default function PortfolioCard({ id, title, preview, description, tags, onClick }) {
  function handleClick() {
    onClick(id);
  }
  return (
    <Grid item container direction="row" onClick={handleClick} className="radio-btns__btn">
      <Grid item xs={5}>
        <img
          className="radio-btns__btn__img"
          src={preview.img}
          alt={preview.alt}
          height="250"
          width="350"
        />
      </Grid>
      <Grid item xs={7} container spacing={2} direction="column">
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
    </Grid>
  );
}

PortfolioCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.any,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  onClick: PropTypes.func
};
