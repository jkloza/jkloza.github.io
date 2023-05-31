import { useContext } from 'react';
import { ThemeModeContext } from '../context';
import { Grid } from '@mui/material';
import juli from '../assets/juli-1.png';
import juliFun from '../assets/juli-fun.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ProfileIcon } from '../atoms/profile-icon';

export default function ProfileImageContainer() {
  const { mode } = useContext(ThemeModeContext);
  const lightMode = mode === 'light';

  const iconStyle = {
    '&:hover': {
      transition: '0.25s',
      color: '#8789C0',
      opacity: 1
    },
    cursor: 'pointer'
  };

  return (
    <Grid container direction="column" spacing={3} alignItems="center" justifyContent="center">
      <Grid item>
        <img src={lightMode ? juliFun : juli} alt="headshot of juli" height={350} width={350} />
      </Grid>
      <Grid item>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <ProfileIcon link="https://github.com/jkloza">
              <GitHubIcon fontSize="large" sx={iconStyle} />
            </ProfileIcon>
          </Grid>
          <Grid item>
            <ProfileIcon link="https://www.linkedin.com/in/juli-kloza-a3180b110/">
              <LinkedInIcon fontSize="large" sx={iconStyle} />
            </ProfileIcon>
          </Grid>
          <Grid item>
            <ProfileIcon link="mailto:jkloza205@gmail.com">
              <MailOutlineIcon fontSize="large" sx={iconStyle} />
            </ProfileIcon>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
