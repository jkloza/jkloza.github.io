import { PropTypes } from 'prop-types';
import { Chip, Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

export default function PortfolioCard({ id, title, description, tags, onClick }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
      <CardMedia
        sx={{ height: 180 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {tags.length &&
          tags.map((tag) => {
            return <Chip key={tag} label={tag} />;
          })}
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => onClick(id)}>
          More Info
        </Button>
        <Button>Try it!</Button>
      </CardActions>
    </Card>
  );
}

PortfolioCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  onClick: PropTypes.func
};
