import { Typography } from '@mui/material';
import { getHello } from '../utils';

export default function HelloComponent() {
  return (
    <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>
      {getHello()}! <span id="hand-emoji">👋</span>
    </Typography>
  );
}
