// react
import { useState, useEffect } from 'react';
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
import { TipoMaterialCard } from '../sections/@dashboard/user/cards';
// axios
import axios from '../utils/axios';

export default function Archivo() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();

  // Limpiar parametros posteriores
  const { tipo_material_id, tipo_material_nombre, periodo_id, periodo_nombre } = location.state.params;

  const [parametro, set_parametro] = useState({ tipo_material_id, tipo_material_nombre, periodo_id, periodo_nombre });

  const [lista_tipo_material, set_lista_tipo_material] = useState([]);

  const ver_archivo = ({ id, nombre, tipo_archivo_id }) => {
    set_parametro(actual => ({ ...actual, archivo_id: id, archivo_nombre: nombre }));

    if (tipo_archivo_id === 3464) {
      navigate("/principal/video", { replace: true, state: { params: { ...parametro, archivo_id: id, archivo_nombre: nombre } } });
    } else {
      navigate("/principal/presentacion2", { replace: true, state: { params: { ...parametro, archivo_id: id, archivo_nombre: nombre } } });
    }
  };

  useEffect(async () => {
    let lista = await listar_material(location.state.params.tipo_material_id, location.state.params.periodo_id);

    lista = lista.map(e => ({ ...e, callback: ver_archivo }));

    set_lista_tipo_material(actual => [...actual, ...lista]);
  }, []);

  const listar_material = async (tipo_material_id, periodo_id) => {
    const response = await axios.get(`/api/psicologia?tipo_operacion=listar_archivo&tipo_material_id=${tipo_material_id}&periodo_id=${periodo_id}`);
    const { json: { data } } = await response.data;
    return data;
  }

  return (
    <Page title="TMA - Saco Oliveros (Archivo)">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={`Material para psicología`}
          links={[
            { name: parametro.tipo_material_nombre, href: '/principal/psicologia' },
            { name: parametro.periodo_nombre, href: '/principal/periodo2', state: { params: parametro } },
            { name: 'Archivo', href: '/principal/archivo' }
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
          {
            lista_tipo_material.map((e, i) => (
              <TipoMaterialCard key={i} tipo_material={e} />
            ))
          }
        </Box>
      </Container>
    </Page>
  );
}
