import { useContext } from 'react';
import { Switch, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeModeContext } from '../context';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& .MuiSwitch-thumb:before': {
        content: "'🌙'"
      },
      '& + .MuiSwitch-track': {
        backgroundColor: 'background.primary',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
    '&:after': {
      content: "'🔆'"
    }
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#007FFF' : '#8789C0',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));

const LightDarkToggle = () => {
  const { colorMode } = useContext(ThemeModeContext);
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <IOSSwitch onChange={colorMode.toggleColorMode} />
    </Box>
  );
};
export default LightDarkToggle;
