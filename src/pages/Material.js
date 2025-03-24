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
import { tipo_material, tipo_material_primaria } from '../_mock/tipo_material';
// axios
import axios from '../utils/axios';

export default function Material() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();

  // Limpiar parametros posteriores
  const { curso_id, aula_id, aula_nombre, curso_nombre, material_id } = location.state.params;

  const [parametro, set_parametro] = useState({ curso_id, aula_id, aula_nombre, curso_nombre, material_id });

  const [lista_tipo_material, set_lista_tipo_material] = useState([]);

  const ver_periodo = ({ id, nombre, es_archivo_descarga }) => {
    set_parametro(actual => ({ ...actual, tipo_material_id: id, tipo_material_nombre: nombre }));

    // PRIMARIA REGULAR
    if ([37, 38, 39, 40, 41, 42, 43, 44, 45].includes(material_id)) {
      if ([61, 63].includes(id)) {
        navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre } } });
      } else if (!es_archivo_descarga) {
        navigate("/principal/periodo", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre } } });
      } else {
        descargarMaterial();
      }
    } else {
      // CICLO REGULAR
      if ([15, 16, 48, 49].includes(id) || [14, 46].includes(material_id)) {
        navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre } } });
      } else {
        navigate("/principal/periodo", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre } } });
      }
    }
    // CICLO VACACIONAL
    /*} else {
      if ([1, 2, 5, 47].includes(id)) {
        navigate("/principal/periodo", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre } } });
      } else {
        navigate("/principal/presentacion", { replace: true, state: { params: { ...parametro, tipo_material_id: id, tipo_material_nombre: nombre } } });
      }
    }*/
  };

  useEffect(() => {
    let lista;

    if ([37, 38, 39, 40, 41, 42, 43, 44, 45].includes(material_id)) {
      lista = tipo_material_primaria.filter(e => e.id_tipo === 1 && e.material_id.includes(material_id));
    } else {
      lista = tipo_material.filter(e => e.id_tipo === 1 && e.material_id.includes(material_id));
    }

    lista = lista.map(e => ({ ...e, callback: ver_periodo }));

    set_lista_tipo_material(actual => [...actual, ...lista]);
  }, []);

  const descargarMaterial = async () => {
    const materiales = JSON.parse(localStorage.getItem("materiales"));

    if (materiales) {
      const material = materiales.find(e => e.curso_id === curso_id && e.aula_id === aula_id && e.tipo_material_id === 58);
      const response = await axios.get(`/api/materiales/recurso?drive_id=${material.material_drive_id}`);
      const { data: { server_url } } = await response.data;
      const fileUrl = server_url;
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileUrl.split('/').pop();
      link.click();
    }
  };

  return (
    <Page title="TMA - Saco Oliveros (Tipo material)">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={`Material para ${aula_nombre}`}
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