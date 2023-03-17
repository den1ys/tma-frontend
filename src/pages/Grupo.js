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

export default function Grupo() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();


  // Limpiar parametros posteriores
  const { curso_id, profesor_id, aula_id, curso_nombre, material_id, tipo_material_id, tipo_material_nombre, periodo_id, periodo_nombre } = location.state.params;
  const [parametro, set_parametro] = useState({ curso_id, profesor_id, aula_id, curso_nombre, material_id, tipo_material_id, tipo_material_nombre, periodo_id, periodo_nombre });

  const [lista_tipo_material, set_lista_tipo_material] = useState([]);

  const ver_presentacion = ({ id, nombre }) => {
    set_parametro(actual => ({ ...actual, grupo_id: id, grupo_nombre: nombre }));

    navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, grupo_id: id, grupo_nombre: nombre } } });
  };

  useEffect(() => {
    // CICLO VACACIONAL
    /*let lista = tipo_material.filter(e => e.id_tipo === 3 && e.id_padre.includes(periodo_id) && e.material_id.includes(material_id));*/

    // CICLO REGULAR
    let lista = tipo_material.filter(e => e.id_tipo === 3 && e.id_padre.includes(periodo_id) && e.material_id.includes(material_id));

    lista = lista.map(e => ({ ...e, callback: ver_presentacion }));

    set_lista_tipo_material(actual => [...actual, ...lista]);
  }, []);

  return (
    <Page title="TMA: Grupo">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Grupo"
          links={[
            { name: parametro.curso_nombre, href: '/principal/horario' },
            { name: parametro.tipo_material_nombre, href: '/principal/tipo_material', state: { params: parametro } },
            { name: parametro.periodo_nombre, href: '/principal/periodo', state: { params: parametro } },
            { name: 'Grupo', href: '/principal/grupo' }
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
