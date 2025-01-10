// @mui
import { Alert, Button, Card, CardActions, CardContent, CircularProgress, Container, FormControl, IconButton, InputLabel, List, ListItem, ListItemSecondaryAction, ListItemText, MenuItem, Paper, Select, Snackbar, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
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
import { Box, padding } from '@mui/system';

import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

export default function Horario() {
  const matches = useMediaQuery('(max-width:750px)');

  const { themeStretch } = useSettings();

  const navigate = useNavigate();

  const [materiales, setMateriales] = useState([]);

  const [horarioManiana, setHorarioManiana] = useState([]);

  const [horarioTarde, setHorarioTarde] = useState([]);

  const [parametro, set_parametro] = useState({});

  const [open, setOpen] = useState(false);

  const [aulaId, setAulaId] = useState("");

  const [cargarHorario, setCargarHorario] = useState(false);

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

  const handleAulaIdChange = (event) => {
    setAulaId(event.target.value);
  };

  const obtener_horario = async (query_param) => {
    setHorarioManiana([]);
    setHorarioTarde([]);
    setCargarHorario(true);

    const response = await axios.get(`/api/horarios${query_param}`);
    const { json: [{ data: morningList }, { data: afternoonList }] } = await response.data;

    setHorarioManiana(morningList);
    setHorarioTarde(afternoonList);
    setCargarHorario(false);
  }

  const ver_tipo_material = async ({ curso_id, aula_id, aula, curso_nombre, material_id }) => {
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

    set_parametro(actual => ({ ...actual, curso_id, aula_id, aula_nombre: aula, curso_nombre, material_id }));

    if (curso_grupos.find(e => e.group_id === curso_id && (e.material_id ? e.material_id.includes(material_id) : true))) {
      setCursos([...curso_grupos.filter(e => e.group_id === curso_id)]);

      setOpenDialog(true);

      return false;
    }

    navigate("/principal/tipo_material", { replace: true, state: { params: { curso_id, aula_id, aula_nombre: aula, curso_nombre, material_id } } });
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
    <Page title="TMA - Saco Oliveros (Horario)">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Horario"
          links={[
            { name: 'Horario', href: '/principal/horario' }
          ]}
        />

        {user.es_director &&
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ sm: 'center' }}
            sx={{ mb: 2 }}
            spacing={2}
          >
            <FormControl style={{ minWidth: 400 }}>
              <InputLabel id="test-select-label">Aula</InputLabel>
              <Select
                value={aulaId}
                onChange={handleAulaIdChange}
                labelId="test-select-label"
                label="Label"
              >
                {user.aulas.map(e => <MenuItem key={e.aula_id} value={e.aula_id}>{e.aula_nombre}</MenuItem>)}
              </Select>
            </FormControl>

            <Button variant="contained" onClick={() => { obtener_horario(`?aula_id=${aulaId}`) }}>Buscar horario</Button>
          </Stack>
        }

        {
          !matches && 
          <Card>
            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "center" }} open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                No hay materiales para este aula!
              </Alert>
            </Snackbar>


            {cargarHorario &&
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 300, height: 300, marginX: "auto" }}>
                <CircularProgress />
              </Box>
            }

            {horarioManiana.length || horarioTarde.length ?
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
              : ""
            }
          </Card>
        }

        {
          matches && 
          <Card sx={{ maxWidth: 750 }}>
            <CardContent>
              <List
                sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}
                component="nav"
              >
                {
                  horarioManiana.map((row) => {
                    return row
                      .filter(x => !x.libre || x.curso_id)
                      .map((x, i) => {
                        const { dia, hora_inicio, hora_fin, curso_nombre, aula, sede } = x;
                        const dia_nombre = dia == 1 ? "LUNES" : dia == 2 ? "MARTES" : dia == 3 ? "MIÉRCOLES" : dia == 4 ? "JUEVES" : dia == 5 ? "VIERNES" : "SÁBADO";

                        return (
                          <ListItem key={i} sx={{ padding: 2 }}>
                            <ListItemText
                            primaryTypographyProps={{fontSize: '3.2vw'}}
                            primary={`${dia_nombre} ${hora_inicio} - ${hora_fin} / ${curso_nombre}`}
                            secondaryTypographyProps={{fontSize: '3vw'}}
                            secondary={<><div>{aula}</div> <div>{sede}</div> <div><Button sx={{width: '100%', marginTop: '.3rem'}} variant="outlined" onClick={(e) => {ver_tipo_material(x)}}>Ver material</Button></div></>} />
                          </ListItem>
                        );
                      });
                  })
                }
              </List>
            </CardContent>
          </Card>
        }
        <DialogRadio open={openDialog} onClose={onCloseDialog} title="Seleccionar curso" options={cursos} />
      </Container>
    </Page >
  );
}
