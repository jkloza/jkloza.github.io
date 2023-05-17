import Timeline from '@mui/lab/Timeline';
import TimelineSection from '../molecules/timeline-section';
import ClickableCard from '../molecules/ClickableCard';

export default function About() {
  return (
    <Timeline position="alternate">
      <TimelineSection>
        <ClickableCard content="Eat" />
      </TimelineSection>
      <TimelineSection>
        <ClickableCard content="Code" />
      </TimelineSection>
      <TimelineSection>
        <ClickableCard content="Sleep" />
      </TimelineSection>
      <TimelineSection>
        <ClickableCard content="Repeat" />
      </TimelineSection>
    </Timeline>
  );
}
