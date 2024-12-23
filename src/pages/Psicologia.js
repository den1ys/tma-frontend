// react
import { useState, useEffect } from 'react';
// @mui
import { Container, Box, Alert } from '@mui/material';
// router
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

export default function Psicologia() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();

  const [parametro, set_parametro] = useState({});

  const [lista_tipo_material, set_lista_tipo_material] = useState([]);

  const ver_periodo = ({ id, nombre }) => {
    set_parametro(actual => ({ ...actual, tipo_material_id: id, tipo_material_nombre: nombre }));

    //navigate("/principal/video", { replace: true });

    navigate("/principal/periodo2", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre } } });
  };

  useEffect(async () => {
    let lista = await listar_material();

    lista = lista.map(e => ({ ...e, callback: ver_periodo }));

    set_lista_tipo_material(actual => [...actual, ...lista]);
  }, []);

  const listar_material = async () => {
    const response = await axios.get(`/api/psicologia?tipo_operacion=listar_material`);
    const { json: { data } } = await response.data;
    return data;
  }

  return (
    <Page title="TMA - Saco Oliveros (Psicología)">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={`Material para psicología`}
          links={[
            { name: 'Psicología', href: '/principal/psicologia' }
          ]}
        />

        {lista_tipo_material.length === 0 ? <Alert severity="error">No hay material asignado</Alert> :
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
        }
      </Container>
    </Page>
  );
}