import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";

export function NavMenu() {
  const pages = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Resume", link: "/resume" },
    { label: "Portfolio", link: "/portfolio" },
  ];
  const [value, setValue] = React.useState(0);
  const handleTabChange = (e, newVal) => setValue(newVal);

  return (
    <Box
      sx={{ display: { xs: "none", sm: "block" }, backgroundColor: "inherit" }}
    >
      <Tabs value={value} onChange={handleTabChange}>
        {pages.map((page) => (
          <Tab label={page.label} to={page.link} component={Link} />
        ))}
      </Tabs>
    </Box>
  );
}
