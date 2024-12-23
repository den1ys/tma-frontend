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
import YouTube from 'react-youtube';
// ----------------------------------------------------------------------

export default function Video() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const [parametro, set_parametro] = useState(location.state.params);
  
  const [configuracion, setConfiguracion] = useState({
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    }
  });
  const [mostrarVideo, setMostrarVideo] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [done, setDone] = useState(false);

  async function onPlayerStateChange(event) {
   if(event.data == 1 && !done) {
      event.target.pauseVideo();

      const entrada = { correo: "materiales@sacooliveros.edu.pe", video_id: videoId, video_estado: "private" };
      const response = await axios.put(`https://fichaonline.sacooliveros.edu.pe:8000/trismegisto-apis/api/v1/google/youtube`, entrada);
      const data = await response.data;

      setDone(true);

      event.target.playVideo();
    }

    setTimeout(async () => {
      const entrada = { correo: "materiales@sacooliveros.edu.pe", video_id: videoId, video_estado: "private" };
      const response = await axios.put(`https://fichaonline.sacooliveros.edu.pe:8000/trismegisto-apis/api/v1/google/youtube`, entrada);
      const data = await response.data;
    }, 2000);
  }

  useEffect(async () => {
    const {drive_id} = await obtener_material(location.state.params.archivo_id);

    const entrada = { correo: "materiales@sacooliveros.edu.pe", video_id: drive_id, video_estado: "unlisted" };
    const response = await axios.put(`https://fichaonline.sacooliveros.edu.pe:8000/trismegisto-apis/api/v1/google/youtube`, entrada);
    const data = await response.data;

    setVideoId(drive_id);

    setMostrarVideo(true);
  }, []);

  const obtener_material = async (material_archivo_id) => {
    const response = await axios.get(`/api/psicologia?tipo_operacion=obtener_archivo&material_archivo_id=${material_archivo_id}`);
    const { json: { data } } = await response.data;
    return data;
  }

  return (
    <Page title="TMA - Saco Oliveros (Psicología)">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading={`Material para psicología`}
          links={[
            { name: parametro.tipo_material_nombre, href: '/principal/psicologia' },
            { name: parametro.periodo_nombre, href: '/principal/periodo2', state: { params: parametro } },
            { name: parametro.archivo_nombre, href: '/principal/archivo', state: { params: parametro } },
            { name: 'Video', href: '/principal/video' }
          ].filter(e => e !== null)}
        />

        {
          mostrarVideo ?
            <YouTube videoId={videoId} opts={configuracion} onStateChange={(event) => { onPlayerStateChange(event) }} />
            : ""
        }
      </Container>
    </Page>
  );
}
