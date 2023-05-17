import { PropTypes } from 'prop-types';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ORANGE } from '../utils/constants';

export default function TimelineSection({ content }) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector sx={{ bgcolor: ORANGE }} />
      </TimelineSeparator>
      <TimelineContent>{content}</TimelineContent>
    </TimelineItem>
  );
}

TimelineSection.propTypes = {
  content: PropTypes.any
};
