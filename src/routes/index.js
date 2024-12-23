import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'principal',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="/principal/horario" replace />, index: true },
        { path: 'horario', element: <PageHorario /> },
        { path: 'tipo_material', element: <PageMaterial /> },
        { path: 'periodo', element: <PagePeriodo /> },
        { path: 'grupo', element: <PageGrupo /> },
        { path: 'presentacion', element: <PagePresentacion /> },
        { path: 'psicologia', element: <PagePsicologia /> },
        { path: 'archivo', element: <PageArchivo /> },
        { path: 'periodo2', element: <PagePeriodo2 /> },
        { path: 'presentacion2', element: <PagePresentacion2 /> },
        { path: 'video', element: <PageVideo /> }
      ],
    },
    {
      path: '/',
      element: <Navigate to="/principal" replace />,
    },
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> }
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));

// MAIN
// const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
const PageHorario = Loadable(lazy(() => import('../pages/Horario')));
const PageMaterial = Loadable(lazy(() => import('../pages/Material')));
const PagePeriodo = Loadable(lazy(() => import('../pages/Periodo')));
const PageGrupo = Loadable(lazy(() => import('../pages/Grupo')));
const PagePresentacion = Loadable(lazy(() => import('../pages/Presentacion')));
const PagePsicologia = Loadable(lazy(() => import('../pages/Psicologia')));
const PagePeriodo2 = Loadable(lazy(() => import('../pages/Periodo2')))
const PageArchivo = Loadable(lazy(() => import('../pages/Archivo')));
const PagePresentacion2 = Loadable(lazy(() => import('../pages/Presentacion2')));
const PageVideo = Loadable(lazy(() => import('../pages/Video')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
