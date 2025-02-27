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

export default function Periodo() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();

  // Limpiar parametros posteriores
  const { curso_id, aula_id, aula_nombre, curso_nombre, material_id, tipo_material_id, tipo_material_nombre } = location.state.params;

  const [parametro, set_parametro] = useState({ curso_id, aula_id, aula_nombre, curso_nombre, material_id, tipo_material_id, tipo_material_nombre });

  const [lista_tipo_material, set_lista_tipo_material] = useState([]);

  const ver_grupo_o_presentacion = ({ id, nombre }) => {
    set_parametro(actual => ({ ...actual, periodo_id: id, periodo_nombre: nombre }));

    // PRIMARIA REGULAR
    if ([37, 38, 39, 40, 41, 42, 43, 44, 45].includes(material_id)) {
      if ([3537, 3538, 3539, 3540, 3541, 3542, 3543, 3544, 3545].includes(id) && [60].includes(tipo_material_id)) {
        navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
      } else {
        navigate("/principal/grupo", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
      }
    } else {
      // CICLO REGULAR V2
      if ([7, 8, 25, 26].includes(material_id)) {
        navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
      } else if ([6].includes(material_id) && [1].includes(tipo_material_id)) {
        navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
      } else if ([1, 2, 3, 4, 5, 19].includes(material_id) && [1, 3].includes(tipo_material_id)) {
        navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
      } else {
        navigate("/principal/grupo", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
      }
    }
    // CICLO VACACIONAL
    /*} else {
      if ([3146, 3147].includes(id) && [47].includes(tipo_material_id) && [11, 12, 13, 36].includes(material_id)) {
        navigate("/principal/grupo", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
      } else {
        navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
      }
    }*/
    // CICLO REGULAR
    /*if ([3170, 3171, 3172, 3173, 3174, 3175, 3176, 3177].includes(id) && [1, 2, 3, 4, 5].includes(material_id)) {
      navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
    } else */
    // CICLO REGULAR V2
    /*if ([7, 8, 25, 26].includes(material_id)) {
      navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
    } else if ([6].includes(material_id) && [1].includes(tipo_material_id)) {
      navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
    } else if ([1, 2, 3, 4, 5, 19].includes(material_id) && [1, 3].includes(tipo_material_id)) {
      navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
    } else {
      navigate("/principal/grupo", { replace: true, state: { params: { ...parametro, periodo_id: id, periodo_nombre: nombre } } });
    }*/
  };

  useEffect(() => {
    // CICLO VACACIONAL
    let lista;

    // PRIMARIA REGULAR
    if ([37, 38, 39, 40, 41, 42, 43, 44, 45].includes(material_id)) {
      lista = tipo_material_primaria.filter(e => e.id_tipo === 2 && e.id_padre.includes(tipo_material_id) && e.material_id.includes(material_id));
    // CICLO VACACIONAL / CICLO ESCOLAR
    } else {
      lista = tipo_material.filter(e => e.id_tipo === 2 && e.id_padre.includes(tipo_material_id) && e.material_id.includes(material_id));
    }

    // Si son material_id [6, 12, 13] y curso INGLES, mostrar SEMANAS 7 y 8 o no
    if ([6, 12, 13].includes(material_id)) {
      if (curso_id !== 22) {
        lista = lista.filter(e => ![3235, 3236].includes(e.id));
      }
      // Si es material ANUAL y el curso INGLES, mostrar SEMANAS o TOMOS 
    } else if ([14].includes(material_id)) {
      if (curso_id === 22) {
        lista = lista.filter(e => ![3146, 3147, 3164, 3165, 3166, 3167, 3168, 3169, 3237].includes(e.id));
      } else {
        lista = lista.filter(e => [3146, 3147, 3164, 3165, 3166, 3167, 3168, 3169, 3237].includes(e.id));
      }
    } else if (material_id === 7 && tipo_material_id === 1) {
      lista = lista.map(e => ({ ...e, nombre: e.nombre_uni }));
    }
    // ..........

    // CICLO ESCOLAR
    /*let lista = tipo_material.filter(e => e.id_tipo === 2 && e.id_padre.includes(tipo_material_id) && e.material_id.includes(material_id));

    if (material_id === 7 && tipo_material_id === 1) {
      lista = lista.map(e => ({ ...e, nombre: e.nombre_uni }));
    }*/
    // ..........

    lista = lista.map(e => ({ ...e, callback: ver_grupo_o_presentacion }));

    set_lista_tipo_material(actual => [...actual, ...lista]);
  }, []);

  return (
    <Page title="TMA - Saco Oliveros (Periodo)">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={`Material para ${aula_nombre}`}
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
