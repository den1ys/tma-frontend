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
// data
import { tipo_material } from '../_mock/tipo_material';

export default function Periodo() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();

  const [parametro, set_parametro] = useState(location.state.params);

  const [lista_tipo_material, set_lista_tipo_material] = useState([]);

  const ver_grupo_o_presentacion = ({ id, nombre }) => {
    set_parametro(actual => ({ ...actual, periodo_id: id, periodo_nombre: nombre }));

    //navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });

    /*if ([3146, 3147, 3164, 3165, 3166, 3167, 3168, 3169].includes(id) && parametro.tipo_material_id === 2) {
      navigate("/principal/grupo", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
    } else {
      navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
    }*/

    navigate("/principal/grupo", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
  };

  useEffect(() => {
    const { tipo_material_id } = parametro;

    let lista = tipo_material.filter(e => e.id_tipo === 2 && e.id_padre.includes(tipo_material_id));

    lista = lista.map(e => ({ ...e, callback: ver_grupo_o_presentacion }));

    set_lista_tipo_material(actual => [...actual, ...lista]);
  }, []);

  return (
    <Page title="TMA: Periodo">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Periodo"
          links={[
            { name: parametro.curso_nombre, href: '/principal/horario' },
            { name: parametro.tipo_material_nombre, href: '/principal/tipo_material', state: { params: parametro } },
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
