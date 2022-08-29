// @mui
import { Card, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// hooks
import { useEffect, useState } from 'react';
import useSettings from '../hooks/useSettings';
import useAuth from '../hooks/useAuth';
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { HorarioTablaFila } from '../sections/@dashboard/invoice/list';
// axios
import axios from '../utils/axios';
// router
import { useNavigate } from 'react-router';

// ----------------------------------------------------------------------

export default function Horario() {
  const { themeStretch } = useSettings();

  const navigate = useNavigate();

  const [materiales, setMateriales] = useState([]);

  const [horarioManiana, setHorarioManiana] = useState([]);

  const [horarioTarde, setHorarioTarde] = useState([]);

  const { user, logout } = useAuth();

  useEffect(() => {
    const materiales = JSON.parse(localStorage.getItem("materiales") || "[]");

    if (materiales) {
      setMateriales(materiales);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("materiales", JSON.stringify(materiales));
  }, [materiales]);

  useEffect(() => {
    async function getHorario() {
      const { documento } = user;
      const response = await axios.get(`/api/horarios/${documento}`);
      const { json: [{ data: morningList }] } = await response.data;

      setHorarioManiana(morningList);
    }

    getHorario();
  }, []);

  const verTipoMaterial = async ({ curso_id: cursoId, profesor_id: profesorId, aula_id: aulaId }) => {
    if (!materiales.some(e => e.curso_id === cursoId && e.aula_id === aulaId)) {
      const response = await axios.get(`/api/materiales?curso_id=${cursoId}&profesor_id=${profesorId}&aula_id=${aulaId}`);
      const { json: { data } } = await response.data;

      setMateriales(materiales => [...materiales, ...data]);

      // Eliminar duplicados
      /* setMateriales(
        materiales.reduce((arr, curr) => {
          if (!arr.some(e => e.material_archivo_id === curr.material_archivo_id)) {
            arr.push(curr);
          }

          return arr;
        }, [])
      ); */
    }

    navigate("/principal/tipo_material", { replace: true, state: { params: { cursoId, profesorId, aulaId } } });
  };

  return (
    <Page title="TMA: Horario">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Horario"
          links={[
            { name: 'Horario', href: '/principal/horario' }
          ]}
        />

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Lunes</TableCell>
                    <TableCell align="center">Martes</TableCell>
                    <TableCell align="center">Miércoles</TableCell>
                    <TableCell align="center">Jueves</TableCell>
                    <TableCell align="center">Viernes</TableCell>
                    <TableCell align="center">Sábado</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {horarioManiana.map((row, index) => (
                    <HorarioTablaFila
                      key={index}
                      row={row}
                      callback={verTipoMaterial}
                    />
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
