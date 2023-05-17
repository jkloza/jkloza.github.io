import { Typography } from "@mui/material";
import React from "react";
import { getHello } from "../utils";

export default function HelloComponent() {
  return <Typography variant="h2">{getHello()}!</Typography>;
}
