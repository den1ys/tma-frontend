// react
import { useState, useEffect } from 'react';
// @mui
import { Container, Box, Alert, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton, Card } from '@mui/material';
// router
import { useLocation, useNavigate } from 'react-router';
// hooks
import useSettings from '../hooks/useSettings';
import useAuth from '../hooks/useAuth';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
// sections
import { TipoMaterialCard } from '../sections/@dashboard/user/cards';
// axios
import axios from '../utils/axios';
import { Edit } from '@mui/icons-material';
import Scrollbar from 'src/components/Scrollbar';

export default function Acompanamiento() {
  const { themeStretch } = useSettings();

  const { user } = useAuth();

  const location = useLocation();

  const navigate = useNavigate();

  const [lista_ficha_profesor, set_lista_ficha_profesor] = useState([]);

  const listar_ficha_profesor = async (numero_documento) => {
    const response = await axios.get(`/api/acompanamiento?tipo_operacion=listar_ficha_profesor&numero_documento=${numero_documento}`);
    const { json: { data } } = await response.data;
    return data;
  }

  useEffect(async () => {
    const { es_profesor, documento } = user;

    if (es_profesor) {
      let lista = await listar_ficha_profesor(documento);

      set_lista_ficha_profesor(actual => [...actual, ...lista]);
    }
  }, []);

  const ver_indicador = async (acompanamiento_profesor_id, observacion_director, observacion_profesor) => {
    navigate("/principal/acompanamiento_actualizar", { replace: true, state: { acompanamiento_profesor_id, observacion_director, observacion_profesor } });
  };

  return (
    <Page title="TMA - Saco Oliveros (Acompañamiento)">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading={`Acompañamiento`}
          links={[
            { name: 'Acompañamiento', href: '/principal/acompanamiento' }
          ]}
        />

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>SEDE</TableCell>
                    <TableCell>FICHA</TableCell>
                    <TableCell>PUNTAJE</TableCell>
                    <TableCell>ESTADO</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lista_ficha_profesor.map((row) => (
                    <TableRow
                      key={row.acompanamiento_profesor_id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{row.sede_nombre} </TableCell>
                      <TableCell>{row.tipo_acompanamiento_nombre}</TableCell>
                      <TableCell>{row.puntaje}</TableCell>
                      <TableCell>{row.estado_nombre}</TableCell>
                      <TableCell>
                        <IconButton color="secondary" onClick={() => { ver_indicador(row.acompanamiento_profesor_id, row.observacion_director, row.observacion_profesor) }}>
                          <Edit />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}