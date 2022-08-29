// @mui
import { Container, Box } from '@mui/material';
// router
import { useLocation, useNavigate } from 'react-router';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
// sections
import { VolumeCard } from '../sections/@dashboard/user/cards';

export default function Material() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();

  const { params } = location.state;

  const verPeriodo = (id) => {
    params.tipoMaterialId = id;

    navigate("/principal/periodo", { replace: true, state: { params } });
  }

  const tipoMateriales = [
    {
      "id": 1,
      "volumeName": "COMPENDIO",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver tomos",
      "callback": verPeriodo
    },
    {
      "id": 2,
      "volumeName": "HELICODIAPOSITIVA",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/13/300/400",
      "buttonText": "Ver helicodiapositivas",
      "callback": verPeriodo
    },
    {
      "id": 3,
      "volumeName": "BALOTARIO",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/33/300/400",
      "buttonText": "Ver balotario",
      "callback": verPeriodo
    },
    {
      "id": 4,
      "volumeName": "SOLUCIONARIO DE BALOTARIO",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/43/300/400",
      "buttonText": "Ver solucionario",
      "callback": verPeriodo
    }
  ];

  return (
    <Page title="TMA: Materiales">
      <Container maxWidth={themeStretch ? false : 'lg'}>
      <HeaderBreadcrumbs
          heading="Tipo material"
          links={[
            { name: 'Horario', href: '/principal/horario' },
            { name: 'Tipo Material', href: '/principal/tipo_material' }
          ]}
        />

        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {tipoMateriales.map((volume) => (
            <VolumeCard key={volume.id} volume={volume} />
          ))}
        </Box>
      </Container>
    </Page>
  );
}