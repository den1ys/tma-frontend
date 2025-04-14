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
import { tipo_material, tipo_material_primaria } from '../_mock/tipo_material';
// axios
import axios from '../utils/axios';

export default function Grupo() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();


  // Limpiar parametros posteriores
  const { curso_id, aula_id, aula_nombre, curso_nombre, material_id, tipo_material_id, tipo_material_nombre, periodo_id, periodo_nombre } = location.state.params;
  const [parametro, set_parametro] = useState({ curso_id, aula_id, aula_nombre, curso_nombre, material_id, tipo_material_id, tipo_material_nombre, periodo_id, periodo_nombre });

  const [lista_tipo_material, set_lista_tipo_material] = useState([]);

  const ver_presentacion = async ({ id, nombre }) => {
    set_parametro(actual => ({ ...actual, grupo_id: id, grupo_nombre: nombre }));

    const materiales = JSON.parse(localStorage.getItem("materiales"));

    if (materiales) {
      const material = materiales.find(e => e.curso_id === curso_id && e.aula_id === aula_id
        && e.tipo_material_id === tipo_material_id && (periodo_id ? e.periodo_id === periodo_id : true) && (id ? e.grupo_id === id : true));

      if (material) {
        const { material_drive_id, material_drive_encriptado, es_visualizable } = material;

        if (es_visualizable) {
          navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, grupo_id: id, grupo_nombre: nombre } } });
        }

        const response = await axios.get(`/api/materiales/recurso?drive_id=${material_drive_id}${material_drive_encriptado ? `&drive_encrypted=${material_drive_encriptado}` : ""}`);
        const { data: { server_url } } = await response.data;

        if (!material_drive_encriptado) {
          const fileUrl = server_url;
          const link = document.createElement('a');
          link.href = fileUrl;
          link.download = fileUrl.split('/').pop();
          link.click();
        }
      } else {
        navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, grupo_id: id, grupo_nombre: nombre } } });
      }
    }
  };

  useEffect(() => {
    let lista;

    // PRIMARIA REGULAR
    if ([37, 38, 39, 40, 41, 42, 43, 44, 45].includes(material_id)) {
      lista = tipo_material_primaria.filter(e => e.id_tipo === 3 && e.id_padre.includes(periodo_id) && e.material_id.includes(material_id));
      // CICLO VACACIONAL / CICLO ESCOLAR
    } else {
      lista = tipo_material.filter(e => e.id_tipo === 3 && e.id_padre.includes(periodo_id) && e.material_id.includes(material_id));
    }

    if ([1, 2, 3, 4, 5, 19].includes(material_id) && tipo_material_id === 2) {
      if (periodo_id === 3146) {
        lista = lista.filter(e => [11, 12, 13, 14].includes(e.id));
      } else if (periodo_id === 3147) {
        lista = lista.filter(e => [17, 18, 19, 14].includes(e.id));
      } else if (periodo_id === 3164) {
        lista = lista.filter(e => [20, 21, 22, 14].includes(e.id));
      } else if (periodo_id === 3165) {
        lista = lista.filter(e => [23, 24, 25, 14].includes(e.id));
      } else if (periodo_id === 3166) {
        lista = lista.filter(e => [26, 27, 28, 14].includes(e.id));
      } else if (periodo_id === 3167) {
        lista = lista.filter(e => [29, 30, 31, 14].includes(e.id));
      } else if (periodo_id === 3168) {
        lista = lista.filter(e => [32, 33, 34, 14].includes(e.id));
      } else if (periodo_id === 3169) {
        lista = lista.filter(e => [35, 36, 37, 14].includes(e.id));
      }
    } else if (material_id === 6 && tipo_material_id === 2) {
      if (periodo_id === 3146) {
        lista = lista.filter(e => [11, 12, 13, 17].includes(e.id));
      } else if (periodo_id === 3147) {
        lista = lista.filter(e => [18, 19, 20, 21].includes(e.id));
      } else if (periodo_id === 3164) {
        lista = lista.filter(e => [22, 23, 24, 25].includes(e.id));
      } else if (periodo_id === 3165) {
        lista = lista.filter(e => [26, 27, 28, 29].includes(e.id));
      } else if (periodo_id === 3166) {
        lista = lista.filter(e => [30, 31, 32, 33].includes(e.id));
      } else if (periodo_id === 3167) {
        lista = lista.filter(e => [34, 35, 36, 37].includes(e.id));
      } else if (periodo_id === 3327) {
        lista = lista.filter(e => [11, 12, 13, 17].includes(e.id));
      } else if (periodo_id === 3328) {
        lista = lista.filter(e => [18, 19, 20, 21].includes(e.id));
      } else if (periodo_id === 3329) {
        lista = lista.filter(e => [22, 23, 24, 25].includes(e.id));
      }
    }


    lista = lista.map(e => ({ ...e, callback: ver_presentacion }));

    set_lista_tipo_material(actual => [...actual, ...lista]);
  }, []);

  return (
    <Page title="TMA - Saco Oliveros (Grupo)">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={`Material para ${aula_nombre}`}
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
