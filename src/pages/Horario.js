// @mui
import { Alert, Card, Container, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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

  const [open, setOpen] = useState(false);

  const { user } = useAuth();

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
      const { json: [{ data: morningList }, { data: afternoonList }] } = await response.data;

      setHorarioManiana(morningList);
      setHorarioTarde(afternoonList);
    }

    getHorario();
  }, []);

  const ver_tipo_material = async ({ curso_id, profesor_id, aula_id, curso_nombre, material_id }) => {
    if (!materiales.some(e => e.curso_id === curso_id && e.aula_id === aula_id)) {
      const response = await axios.get(`/api/materiales?curso_id=${curso_id}&profesor_id=${profesor_id}&aula_id=${aula_id}`);
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

    if (materiales.length > 0) {
      setOpen(true);

      //return false;
    }

    navigate("/principal/tipo_material", { replace: true, state: { params: { curso_id, profesor_id, aula_id, curso_nombre, material_id } } });
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
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
          <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "center" }} open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
              No hay materiales para este aula!
            </Alert>
          </Snackbar>

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
                  {horarioManiana.length > 0 &&
                    <TableRow>
                      <TableCell colSpan={6} align="center" size="small">Turno mañana</TableCell>
                    </TableRow>}

                  {horarioManiana.map((row, index) => (
                    <HorarioTablaFila
                      key={index}
                      row={row}
                      callback={ver_tipo_material}
                    />
                  ))}

                  {horarioTarde.length > 0 &&
                    <TableRow>
                      <TableCell colSpan={6} align="center" size="small">Turno tarde</TableCell>
                    </TableRow>}

                  {horarioTarde.map((row, index) => (
                    <HorarioTablaFila
                      key={index}
                      row={row}
                      callback={ver_tipo_material}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page >
  );
}
