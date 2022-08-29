// @mui
import { Container, Box } from '@mui/material';
// react hooks
import { useLocation, useNavigate } from 'react-router';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
// sections
import { VolumeCard } from '../sections/@dashboard/user/cards';

// ----------------------------------------------------------------------

export default function Tomo() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();

  const { params } = location.state;

  const verPresentacion = (id) => {
    params.periodoId = id;

    navigate("/principal/presentacion", { replace: true, state: { params } });
  }

  const periodosCompendioHelicodiapositiva = [
    {
      "id": 3146,
      "volumeName": "TOMO 1",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3147,
      "volumeName": "TOMO 2",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3164,
      "volumeName": "TOMO 3",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3165,
      "volumeName": "TOMO 4",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3166,
      "volumeName": "TOMO 5",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3167,
      "volumeName": "TOMO 6",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3168,
      "volumeName": "TOMO 7",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3169,
      "volumeName": "TOMO 8",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    }
  ];

  const periodosBalotarioSolucionario = [
    {
      "id": 3170,
      "volumeName": "MENSUAL 1",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3171,
      "volumeName": "MENSUAL 2",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3172,
      "volumeName": "MENSUAL 3",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3173,
      "volumeName": "MENSUAL 4",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3174,
      "volumeName": "BIMESTRAL 1",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3175,
      "volumeName": "BIMESTRAL 2",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3176,
      "volumeName": "BIMESTRAL 3",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    },
    {
      "id": 3177,
      "volumeName": "BIMESTRAL 4",
      "volumeLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "volumeCover": "https://picsum.photos/id/3/300/400",
      "buttonText": "Ver recurso",
      "callback": verPresentacion
    }
  ];

  return (
    <Page title="TMA: Tomo">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Periodo"
          links={[
            { name: 'Horario', href: '/principal/horario' },
            { name: 'Tipo Material', href: '/principal/tipo_material' },
            { name: 'Periodo', href: '/principal/periodo' }
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
          {[1, 2].includes(params.tipoMaterialId) ?
            periodosCompendioHelicodiapositiva.map((volume) => (
              <VolumeCard key={volume.id} volume={volume} />
            ))
            :
            periodosBalotarioSolucionario.map((volume) => (
              <VolumeCard key={volume.id} volume={volume} />
            ))
          }
        </Box>
      </Container>
    </Page>
  );
}
