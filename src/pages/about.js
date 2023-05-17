import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ClickableCard from "../molecules/ClickableCard";
import { ORANGE } from "../utils/constants";

export default function About() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ bgcolor: ORANGE }} />
        </TimelineSeparator>
        <TimelineContent>
          <ClickableCard content="Eat" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ bgcolor: ORANGE }} />
        </TimelineSeparator>
        <TimelineContent>
          <ClickableCard content="Code" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ bgcolor: ORANGE }} />
        </TimelineSeparator>
        <TimelineContent>
          <ClickableCard content="Sleep" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <ClickableCard content="Repeat" />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
