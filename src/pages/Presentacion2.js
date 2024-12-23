// @mui
import { Alert, Box, CircularProgress, Container } from '@mui/material';
// hooks
import { useEffect, useState } from 'react';
import useSettings from '../hooks/useSettings';
// router
import { useLocation } from 'react-router';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import PdfViewerComponent from 'src/components/PdfViewerComponent';
// axios
import axios from '../utils/axios';
// ----------------------------------------------------------------------

export default function Presentacion() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const [parametro, set_parametro] = useState(location.state.params);

  const [url, setUrl] = useState('');

  const [error, setError] = useState(false);

  useEffect(async () => {
    const {drive_id, drive_encriptado} = await obtener_material(location.state.params.archivo_id);
    const response = await axios.get(`/api/materiales/recurso?drive_id=${drive_id}&drive_encrypted=${drive_encriptado}`);
    const { data: { server_url, drive_decrypted } } = await response.data;

    setUrl(server_url);
  }, []);

  const obtener_material = async (material_archivo_id) => {
    const response = await axios.get(`/api/psicologia?tipo_operacion=obtener_archivo&material_archivo_id=${material_archivo_id}`);
    const { json: { data } } = await response.data;
    return data;
  }

  return (
    <Page title="TMA - Saco Oliveros (Presentación)">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading={`Material para psicología`}
          links={[
            { name: parametro.tipo_material_nombre, href: '/principal/psicologia' },
            { name: parametro.periodo_nombre, href: '/principal/periodo2', state: { params: parametro } },
            { name: parametro.archivo_nombre, href: '/principal/archivo', state: { params: parametro } },
            { name: 'Presentación', href: '/principal/presentacion' }
          ].filter(e => e !== null)}
        />

        {error && <Alert severity="error">No hay material disponible</Alert>}

        {!url && !error ?
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 300, height: 300, marginX: "auto" }}>
            <CircularProgress />
          </Box>
          : ""
        }

        {url &&
          <PdfViewerComponent url={url} />
        }
      </Container>
    </Page>
  );
}
