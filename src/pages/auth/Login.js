// react
import { useCallback } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Card, Stack, Link, Container, Typography } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
// sections
import { LoginForm } from '../../sections/auth/login';
import { loadFull } from "tsparticles";
import ParticlesBackground from 'src/components/ParticlesBackground';
import useSettings from 'src/hooks/useSettings';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  const { themeMode } = useSettings();

  return (
    <Page title="Login">
      <ParticlesBackground themeMode={themeMode}/>

      <RootStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="column" alignItems="center" spacing={2} sx={{ mb: 5 }}>
              <img
                src={`/assets/images/logo-saco.png?w=164&h=164&fit=crop&auto=format`}
                srcSet={`/assets/images/logo-saco.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={'Saco oliveros'}
              />

              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" align="center" gutterBottom>
                  TMA
                </Typography>
              </Box>
            </Stack>

            <LoginForm />
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
