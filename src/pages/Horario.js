// @mui
import { Alert, Card, Container, Snackbar, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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
import DialogRadio from 'src/components/DialogRadio';
// data
import { curso_grupos } from '../_mock/tipo_material';
import AulaSearch from 'src/sections/@dashboard/horario/AulaSearch';

// ----------------------------------------------------------------------

export default function Horario() {
  const { themeStretch } = useSettings();

  const navigate = useNavigate();

  const [materiales, setMateriales] = useState([]);

  const [horarioManiana, setHorarioManiana] = useState([]);

  const [horarioTarde, setHorarioTarde] = useState([]);

  const [parametro, set_parametro] = useState({});

  const [open, setOpen] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const [cursos, setCursos] = useState([]);

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
    const { es_profesor, documento } = user;

    if (es_profesor) {
      obtener_horario(`?documento=${documento}`);
    }
  }, []);

  const obtener_horario = async (query_param) => {
    const response = await axios.get(`/api/horarios${query_param}`);
    const { json: [{ data: morningList }, { data: afternoonList }] } = await response.data;

    setHorarioManiana(morningList);
    setHorarioTarde(afternoonList);
  }

  useEffect(() => {
    console.log(horarioManiana)
  }, [horarioManiana]);

  const ver_tipo_material = async ({ curso_id, aula_id, curso_nombre, material_id }) => {
    if (!materiales.some(e => e.curso_id === curso_id && e.aula_id === aula_id)) {
      const response = await axios.get(`/api/materiales?curso_id=${curso_id}&aula_id=${aula_id}`);
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

    set_parametro(actual => ({ ...actual, curso_id, aula_id, curso_nombre, material_id }));

    if (curso_grupos.find(e => e.group_id === curso_id)) {
      setCursos(actual => [...actual, ...curso_grupos.filter(e => e.group_id === curso_id)]);

      setOpenDialog(true);

      return false;
    }

    navigate("/principal/tipo_material", { replace: true, state: { params: { curso_id, aula_id, curso_nombre, material_id } } });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onCloseDialog = (value) => {
    setOpenDialog(false);

    if (!value) {
      return false;
    }

    const { id: curso_id, text: curso_nombre } = curso_grupos.find(e => e.id === value);

    navigate("/principal/tipo_material", { replace: true, state: { params: { ...parametro, curso_id, curso_nombre } } });
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

        {user.es_director &&
          <Stack
            spacing={2}
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ sm: 'center' }}
            justifyContent="space-between"
            sx={{ mb: 2 }}
          >
            <AulaSearch callback={obtener_horario} />
          </Stack>
        }

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

        <DialogRadio open={openDialog} onClose={onCloseDialog} title="Seleccionar curso" options={cursos} />
      </Container>
    </Page >
  );
}
