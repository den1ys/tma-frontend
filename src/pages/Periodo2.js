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

export default function Periodo2() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();

  // Limpiar parametros posteriores
  const { tipo_material_id, tipo_material_nombre } = location.state.params;

  const [parametro, set_parametro] = useState({ tipo_material_id, tipo_material_nombre });

  const [lista_tipo_material, set_lista_tipo_material] = useState([]);

  const ver_grupo_o_archivo = ({ id, nombre }) => {
    set_parametro(actual => ({ ...actual, periodo_id: id, periodo_nombre: nombre }));

    navigate("/principal/archivo", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
  };

  useEffect(async () => {
    let lista = await listar_material(location.state.params.tipo_material_id);

    lista = lista.map(e => ({ ...e, callback: ver_grupo_o_archivo }));

    set_lista_tipo_material(actual => [...actual, ...lista]);
  }, []);

  const listar_material = async (tipo_material_id) => {
    const response = await axios.get(`/api/psicologia?tipo_operacion=listar_periodo&tipo_material_id=${tipo_material_id}`);
    const { json: { data } } = await response.data;
    return data;
  }

  return (
    <Page title="TMA - Saco Oliveros (Periodo)">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={`Material para psicología`}
          links={[
            { name: parametro.tipo_material_nombre, href: '/principal/psicologia' },
            { name: 'Periodo', href: '/principal/periodo2' }
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
