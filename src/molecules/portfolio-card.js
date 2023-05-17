import { PropTypes } from 'prop-types';
import { Chip, Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

export default function PortfolioCard({ title, description, tags }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button variant="contained">Preview</Button>
        <Button>Github</Button>
      </CardActions>
    </Card>
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array
};
