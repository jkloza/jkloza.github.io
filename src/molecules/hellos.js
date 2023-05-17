import { Typography } from '@mui/material';
import { getHello } from '../utils';

export default function HelloComponent() {
  return <Typography variant="h2">{getHello()}!</Typography>;
}
