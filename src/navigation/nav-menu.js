import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pages } from '../data';

export function NavMenu() {
  const { pathname } = useLocation();

  let path = 0;
  pages.forEach((page, i) => {
    if (pathname === page.link) {
      path = i;
    }
  });
  const [value, setValue] = useState(path);
  const handleTabChange = (e, newVal) => setValue(newVal);

  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor: 'theme.primary' }}>
      <Tabs value={value} onChange={handleTabChange}>
        {pages.map((page) => (
          <Tab
            label={page.label}
            to={page.link}
            component={Link}
            key={page.link}
            sx={{
              '&:hover': {
                color: '#40a9ff',
                opacity: 1
              }
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
