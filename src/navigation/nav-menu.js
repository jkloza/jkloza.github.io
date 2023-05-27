import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function NavMenu() {
  const pages = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Resume', link: '/resume' },
    { label: 'Portfolio', link: '/portfolio' }
  ];
  const [value, setValue] = useState(0);
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
