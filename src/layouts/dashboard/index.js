import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
import useResponsive from '../../hooks/useResponsive';
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// config
import { HEADER, NAVBAR } from '../../config';
//
import DashboardHeader from './header';
import NavbarVertical from './navbar/NavbarVertical';
import NavbarHorizontal from './navbar/NavbarHorizontal';
import useAuth from 'src/hooks/useAuth';
import { PATH_AUTH } from 'src/routes/paths';
import { useIdleTimer } from 'react-idle-timer';

// ----------------------------------------------------------------------

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const { collapseClick, isCollapse } = useCollapseDrawer();

  const { themeLayout } = useSettings();

  const isDesktop = useResponsive('up', 'lg');

  const [open, setOpen] = useState(false);

  const verticalLayout = themeLayout === 'vertical';

  /* Idletimer */
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [openDialog, setOpenDialog] = useState(false);

  const [remaining, setRemaining] = useState();

  const [intervalo, setIntervalo] = useState();

  const onIdle = async () => {
    try {
      await logout();
      navigate(PATH_AUTH.login, { replace: true });
    } catch (error) { }
  }

  const onActive = (event) => {
    console.log("active");
  }

  const onPrompt = (event) => {
    setOpenDialog(true);

    clearInterval(intervalo);

    setRemaining(5);

    setIntervalo(setInterval(() => setRemaining(actual => actual - 1), 1000));
  }

  const onLogout = async (event) => {
    try {
      await logout();
      navigate(PATH_AUTH.login, { replace: true });
    } catch (error) { }
  }

  const onContinue = (event) => {
    setOpenDialog(false);
    reset();
  }

  const { getRemainingTime, reset } = useIdleTimer({ onIdle, onActive, timeout: 500000, promptTimeout: 6000, onPrompt });

  if (verticalLayout) {
    return (
      <>
        <DashboardHeader onOpenSidebar={() => setOpen(true)} verticalLayout={verticalLayout} />

        {isDesktop ? (
          <NavbarHorizontal />
        ) : (
          <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        )}

        <Box
          component="main"
          sx={{
            px: { lg: 2 },
            pt: {
              xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
              lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 80}px`,
            },
            pb: {
              xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
              lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 24}px`,
            },
          }}
        >
          <Outlet />
        </Box>

        <Dialog open={openDialog}>
          <DialogTitle sx={{ marginBottom: 5 }}>
            Advertencia de cierre de sesión
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: 2 }}>
              Su sesión está a punto de caducar debido a la inactividad.
            </DialogContentText>
            <DialogContentText>
              Tiempo restante: {remaining} segundo(s)
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={onLogout}>Cerrar sesión</Button>
            <Button onClick={onContinue}>Continuar</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        <DashboardHeader isCollapse={isCollapse} onOpenSidebar={() => setOpen(true)} />

        <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

        <MainStyle collapseClick={collapseClick}>
          <Outlet />
        </MainStyle>
      </Box>

      <Dialog open={openDialog}>
        <DialogTitle sx={{ marginBottom: 5 }}>
          Advertencia de cierre de sesión
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: 2 }}>
            Su sesión está a punto de caducar debido a la inactividad.
          </DialogContentText>
          <DialogContentText>
            Tiempo restante: {remaining} segundo(s)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={onLogout}>Cerrar sesión</Button>
          <Button onClick={onContinue}>Continuar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
