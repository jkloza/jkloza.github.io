import { Typography } from '@mui/material';
import { getHello } from '../utils';

export default function HelloComponent() {
  return (
    <Typography variant="h2" color="secondary" sx={{ fontWeight: 700 }}>
      {getHello()}! <span id="hand-emoji">👋</span>
    </Typography>
  );
}
