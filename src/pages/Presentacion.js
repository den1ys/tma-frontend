// external
import { Viewer, Worker } from '@react-pdf-viewer/core';
// @mui
import { Container } from '@mui/material';
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

// ----------------------------------------------------------------------

export default function Presentacion() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const [materiales, setMateriales] = useState([]);

  const [contrasenia, setContrasenia] = useState('');

  const [url, setUrl] = useState('');

  const { params } = location.state;

  const { cursoId, profesorId, aulaId, tipoMaterialId, periodoId } = params;

  useEffect(async () => {
    const materiales = JSON.parse(localStorage.getItem("materiales"));

    if (materiales) {
      setMateriales(materiales);

      const material = materiales.find(e => e.curso_id === cursoId && e.aula_id === aulaId
        && e.tipo_material_id === tipoMaterialId && e.periodo_id === periodoId);

      if (!material) {
        alert("No hay material para este curso");
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
          heading="Horario"
          links={[
            { name: 'Horario', href: '/principal/horario' },
            { name: 'Tipo Material', href: '/principal/tipo_material' },
            { name: 'Periodo', href: '/principal/periodo' },
            { name: 'Presentación', href: '/principal/presentacion' }
          ]}
        />

        {url &&
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <div style={{ height: '750px' }}>
              <Viewer
                fileUrl={url}
                onDocumentAskPassword={handleAskPassword}
              />
            </div>
          </Worker>
        }
      </Container>
    </Page>
  );
}
