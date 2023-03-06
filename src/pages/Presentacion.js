// external
import { Viewer, Worker } from '@react-pdf-viewer/core';
// @mui
import { Alert, CircularProgress, Container } from '@mui/material';
// hooks
import { useEffect, useState } from 'react';
// router
import { useLocation } from 'react-router';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
// axios
import axios from '../utils/axios';

import useSettings from '../hooks/useSettings';

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import PdfViewer from 'src/components/PdfViewer';


// ----------------------------------------------------------------------

export default function Presentacion() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const [parametro, set_parametro] = useState(location.state.params);

  const [materiales, setMateriales] = useState([]);

  const [contrasenia, setContrasenia] = useState('');

  const [url, setUrl] = useState('');

  const [loader, setLoader] = useState(true);

  const [error, setError] = useState(false);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { toggleTab } = defaultLayoutPluginInstance;
  toggleTab(1);
  const { params } = location.state;

  const { curso_id, profesor_id, aula_id, tipo_material_id, periodo_id, grupo_id } = params;

  useEffect(async () => {
    const materiales = JSON.parse(localStorage.getItem("materiales"));

    if (materiales) {
      setMateriales(materiales);

      const material = materiales.find(e => e.curso_id === curso_id && e.aula_id === aula_id
        && e.tipo_material_id === tipo_material_id && (periodo_id ? e.periodo_id === periodo_id : true) && (grupo_id ? e.grupo_id === grupo_id : true));

      if (!material) {
        setError(true);
      } else {
        const { material_drive_id, material_drive_encriptado } = material;

        const response = await axios.get(`/api/materiales/recurso?drive_id=${material_drive_id}&drive_encrypted=${material_drive_encriptado}`);
        const { data: { server_url, drive_decrypted } } = await response.data;

        setContrasenia(drive_decrypted);
        setUrl(server_url);
      }
    }
  }, []);

  const handleAskPassword = (e) => {
    e.verifyPassword(contrasenia);
  };

  return (
    <Page title="TMA: Presentación">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Presentación"
          links={[
            { name: parametro.curso_nombre, href: '/principal/horario' },
            parametro.tipo_material_id ? { name: parametro.tipo_material_nombre, href: '/principal/tipo_material', state: { params: parametro } } : null,
            parametro.periodo_id ? { name: parametro.periodo_nombre, href: '/principal/periodo', state: { params: parametro } } : null,
            parametro.grupo_id ? { name: parametro.grupo_nombre, href: '/principal/grupo', state: { params: parametro } } : null,
            { name: 'Presentación', href: '/principal/presentacion' }
          ].filter(e => e !== null)}
        />

        {error && <Alert severity="error">No hay material para este curso</Alert>}

        {url &&
          <PdfViewer url={url} />
        }
      </Container>
    </Page>
  );
}
