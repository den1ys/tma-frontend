// react
import { useState, useEffect } from 'react';
// @mui
import { Container, Alert, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton, Button, TextField, Stack, InputLabel, FormControl, Dialog, MenuItem, Select, DialogContent, DialogTitle, DialogActions, Snackbar } from '@mui/material';
// router
import { useLocation, useNavigate } from 'react-router';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
// axios
import axios from '../utils/axios';

export default function AcompanamientoActualizar() {
  const { themeStretch } = useSettings();

  const location = useLocation();

  const navigate = useNavigate();

  const [listar_indicador_profesor, set_listar_indicador_profesor] = useState([]);

  const [disableBotonConformidad, setDisableBotonConformidad] = useState(false);

  const [open, setOpen] = useState(false);

  const [estadoId, setEstadoId] = useState("");

  const [estadoNombre, setEstadoNombre] = useState(null);

  const [observacionProfesor, setObservacionProfesor] = useState("");

  const [acompanamientoProfesorId, setAcompanamientoProfesorId] = useState(null);

  const [observacionDirector, setObservacionDirector] = useState("");

  const [observacionProfesor2, setObservacionProfesor2] = useState("");

  const [nivelId, setNivelId] = useState(null);

  const [alertaGU, setAlertaGU] = useState(false);

  const [alertaGUColor, setAlertaGUColor] = useState('error');

  const [alertaGUMensaje, setAlertaGUMensaje] = useState('');

  const [mostrarCampoObservacion, setMostrarCampoObservacion] = useState(false);

  const listar_ficha_profesor = async () => {
    const { acompanamiento_profesor_id, observacion_director, observacion_profesor, estado_nombre, nivel_id } = location.state;
    setAcompanamientoProfesorId(acompanamiento_profesor_id);
    setObservacionDirector(observacion_director);
    setObservacionProfesor2(observacion_profesor);
    setEstadoNombre(estado_nombre);
    setNivelId(nivel_id);
    const response = await axios.get(`/api/acompanamiento?tipo_operacion=listar_indicador_profesor&acompanamiento_profesor_id=${acompanamiento_profesor_id}`);
    const { json: { data } } = await response.data;
    return data;
  }

  const actualizar_conformidad = async (event) => {
    if (!acompanamientoProfesorId || !estadoId) {
      setAlertaGUMensaje("¡Seleccione un estado!");
      setAlertaGUColor("warning");
      setAlertaGU(true);
      return false;
    }

    if (estadoId == 3592 && !observacionProfesor) {
      setAlertaGUMensaje("¡Ingrese una observación!");
      setAlertaGUColor("warning");
      setAlertaGU(true);
      return false;
    }

    const entrada = JSON.stringify({ tipo_operacion: "actualizar_conformidad", estado_id: estadoId, observacion_profesor: observacionProfesor, acompanamiento_profesor_id: acompanamientoProfesorId });
    const response = await fetch("https://fichaonline.sacooliveros.edu.pe:4000/api/acompanamiento/conformidad", { headers: { "Content-Type": "application/json" }, method: "POST", body: entrada });
    const { status, message } = await response.json();

    if (!status) {
      setAlertaGUMensaje(message);
      setAlertaGUColor("error");
    } else {
      setAlertaGUMensaje("¡Se actualizó la conformidad de la ficha!");
      setAlertaGUColor("success");
      setOpen(false);
      setDisableBotonConformidad(true);

      setTimeout(() => {
        navigate("/principal/acompanamiento", { replace: true });
      }, 3000);
    }
    //console.log()
    setAlertaGU(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEstadoIdChange = (event) => {
    setEstadoId(event.target.value);

    if (event.target.value == 3592) {
      setMostrarCampoObservacion(true);
    } else {
      setMostrarCampoObservacion(false);
    }
  };

  const handleObservacionProfesorChange = (event) => {
    setObservacionProfesor(event.target.value);
  };

  const handleAlertaGUClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertaGU(false);
  };

  useEffect(async () => {
    let lista = await listar_ficha_profesor();

    set_listar_indicador_profesor(actual => [...actual, ...lista]);
  }, []);

  return (
    <Page title="TMA - Saco Oliveros (Acompañamiento)">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={`Acompañamiento`}
          links={[
            { name: 'Acompañamiento', href: '/principal/acompanamiento' },
            { name: 'Actualizar', href: '/principal/acompanamiento' }
          ]}
        />

        { !["OBSERVADO", "INFORMADO"].includes(estadoNombre) && (
          <Stack direction="row" sx={{
            justifyContent: "flex-end",
            marginBottom: "2rem"
          }}>
            {
            [88, 89].includes(nivelId) ?
            <Button variant="contained" onClick={handleClickOpen} disabled={disableBotonConformidad}>Confirmar</Button>
            :
            <Button variant="contained" onClick={handleClickOpen} disabled={disableBotonConformidad}>Conformidad</Button>
            }
          </Stack>
        )
        }

        <TableContainer sx={{ minWidth: 800, position: 'relative', marginBottom: "2rem" }}>
          <Table sx={{ minWidth: 650, border: 1, borderColor: 'primary' }}>
            <TableHead>
              <TableRow>
                <TableCell>CRITERIO</TableCell>
                <TableCell colSpan={2}>INDICADOR</TableCell>
                <TableCell>7</TableCell>
                <TableCell>8</TableCell>
                <TableCell>9</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                listar_indicador_profesor.map((x, index) => {
                  const { criterio_nombre, lista_indicador, promedio } = x;
                  let elemento = [];

                  elemento.push((
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell sx={{ border: 1, borderColor: 'primary' }} rowSpan={lista_indicador.length + 2} component="td" scope="row">{criterio_nombre}</TableCell>
                    </TableRow>
                  ));

                  // FILAS DE INDICADOR
                  elemento.push(...lista_indicador.map(y => {
                    const { detalle_id, indicador_orden, indicador_nombre, puntuacion_7, puntuacion_8, puntuacion_9, puntuacion_10 } = y;

                    return (
                      <TableRow
                        key={detalle_id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align='center' component="td" sx={{ border: 1, borderColor: 'primary' }}>{indicador_orden}</TableCell>
                        <TableCell component="td" sx={{ border: 1, borderColor: 'primary' }}>{indicador_nombre}</TableCell>
                        <TableCell align='center' component="td" sx={{ border: 1, borderColor: 'primary' }}>{puntuacion_7 ? "X" : ""}</TableCell>
                        <TableCell align='center' component="td" sx={{ border: 1, borderColor: 'primary' }}>{puntuacion_8 ? "X" : ""}</TableCell>
                        <TableCell align='center' component="td" sx={{ border: 1, borderColor: 'primary' }}>{puntuacion_9 ? "X" : ""}</TableCell>
                        <TableCell align='center' component="td" sx={{ border: 1, borderColor: 'primary' }}>{puntuacion_10 ? "X" : ""}</TableCell>
                      </TableRow>
                    )
                  }));

                  // FILA DE PROMEDIO
                  elemento.push((
                    <TableRow
                      key={index + 20}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 }, bgcolor: 'rgba(1, 1, 1, 0.15)' }}
                    >
                      <TableCell component="td" sx={{ border: 1, borderColor: 'primary' }}>PROMEDIO</TableCell>
                      <TableCell align='center' colSpan={5} component="td" sx={{ border: 1, borderColor: 'primary' }}>{promedio}</TableCell>
                    </TableRow>
                  ));

                  return (<>{elemento}</>);
                })
              }
            </TableBody>
          </Table>
        </TableContainer>

        <FormControl fullWidth>
          <TextField fullWidth label="Observación del director" variant="standard" disabled value={observacionDirector} />
        </FormControl>

        {
          observacionProfesor2 &&
          (<FormControl fullWidth sx={{ minWidth: 800, position: 'relative', marginTop: "2rem" }}>
            <TextField fullWidth label="Observación del profesor" variant="standard" disabled value={observacionProfesor2} />
          </FormControl>)
        }

        <Dialog
          open={open}
          onClose={handleClose}
        >
            {[88, 89].includes(nivelId) ? 
             <DialogTitle sx={{ marginBottom: "1rem" }}>Actualizar estado</DialogTitle>
             :
             <DialogTitle sx={{ marginBottom: "1rem" }}>Actualizar estado de conformidad</DialogTitle>
             }
          
          <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormControl sx={{ marginTop: "1rem" }}>
              <InputLabel id="test-select-label">Estado</InputLabel>

              <Select labelId="test-select-label" label="Label" value={estadoId} onChange={handleEstadoIdChange}>
                <MenuItem value={3593}>INFORMADO</MenuItem>
                <MenuItem value={3592}>OBSERVADO</MenuItem>
              </Select>
            </FormControl>

            { mostrarCampoObservacion &&
              (
              <FormControl>
                <TextField label="Observación" variant="standard" value={observacionProfesor} onChange={handleObservacionProfesorChange} />
              </FormControl>
              )
            }
          </DialogContent>

          <DialogActions>
            <Button color="error" onClick={handleClose}>Cancelar</Button>

            <Button type="button" onClick={actualizar_conformidad}>Registrar</Button>
          </DialogActions>
        </Dialog>

        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={alertaGU} autoHideDuration={4000} onClose={handleAlertaGUClose}>
          <Alert
            onClose={handleAlertaGUClose}
            severity={alertaGUColor}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {alertaGUMensaje}
          </Alert>
        </Snackbar >
      </Container>
    </Page>
  );
}