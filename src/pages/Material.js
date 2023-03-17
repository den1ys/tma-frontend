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
// data
import { tipo_material } from '../_mock/tipo_material';

export default function Material() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();

  // Limpiar parametros posteriores
  const { curso_id, profesor_id, aula_id, curso_nombre, material_id } = location.state.params;

  const [parametro, set_parametro] = useState({ curso_id, profesor_id, aula_id, curso_nombre, material_id });

  const [lista_tipo_material, set_lista_tipo_material] = useState([]);

  const ver_periodo = ({ id, nombre }) => {
    set_parametro(actual => ({ ...actual, tipo_material_id: id, tipo_material_nombre: nombre }));

    // CICLO VACACIONAL
    /*navigate("/principal/periodo", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre } } });*/

    // CICLO REGULAR
    if ([6, 15, 16].includes(id)) {
      navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre } } });
    } else if ([2].includes(id) && [7, 8].includes(material_id)) {
      const { id: periodo_id, nombre: periodo_nombre } = tipo_material.find(e => e.id_tipo === 2 && e.id_padre.includes(id) && e.material_id.includes(material_id));
      navigate("/principal/grupo", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre, periodo_id, periodo_nombre } } });
    } else {
      navigate("/principal/periodo", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre } } });
    }

  };

  useEffect(() => {
    // CICLO VACACIONAL
    /*let lista = tipo_material.filter(e => e.id_tipo === 1 && e.material_id.includes(material_id));*/
    //

    // CICLO REGULAR
    let lista = tipo_material.filter(e => e.id_tipo === 1 && e.material_id.includes(material_id));

    lista = lista.map(e => ({ ...e, callback: ver_periodo }));

    set_lista_tipo_material(actual => [...actual, ...lista]);
  }, []);

  return (
    <Page title="TMA: Tipo material">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Tipo material"
          links={[
            { name: parametro.curso_nombre, href: '/principal/horario' },
            { name: 'Tipo Material', href: '/principal/tipo_material' }
          ]}
        />

        {lista_tipo_material.length === 0 ? <Alert severity="error">El aula no tiene material asignado</Alert> :
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