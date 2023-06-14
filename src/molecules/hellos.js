import { Typography } from '@mui/material';
import { getHello } from '../utils';
import './hellos.css';

export default function HelloComponent() {
  return (
    <Typography data-testid="hello" variant="h2" color="primary" sx={{ fontWeight: 700 }}>
      {getHello()}! <span id="hand-emoji">👋</span>
    </Typography>
  );
}
