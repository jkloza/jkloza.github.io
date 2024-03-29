import { PropTypes } from 'prop-types';
import { Typography, Card, CardActionArea, CardContent } from '@mui/material';
// import { theme } from '../mui/theme';

// Styles
// const headingStyles = {
// 	marginTop: "10%",
// 	marginBottom: 30,
// 	maxWidth: 320,
// }

// const pageStyles = {
// 	color: '#232129',
// 	padding: 96,
// 	fontFamily: '-apple-system, Roboto, sans-serif, serif',
// }

export default function ClickableCard({ content, styles = {} }) {
  return (
    <Card sx={{ ...styles }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="white">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ClickableCard.propTypes = {
  content: PropTypes.string,
  styles: PropTypes.object
};
