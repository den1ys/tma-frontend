import * as Yup from 'yup';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Alert, IconButton, InputAdornment, Button, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import GoogleIcon from '@mui/icons-material/Google';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
// anothers
import { useGoogleLogin } from '@react-oauth/google';
// css
import './LoginForm.css';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { login } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const [openDialogGenerarUsuario, setOpenDialogGenerarUsuario] = useState(false);

  const [correoInstitucional, setCorreoInstitucional] = useState('');

  const [alertaGU, setAlertaGU] = useState(false);

  const [alertaGUColor, setAlertaGUColor] = useState('error');

  const [alertaGUMensaje, setAlertaGUMensaje] = useState('');

  const [isSubmittingGU, setIsSubmittingGU] = useState(false);

  const handleCorreoInstitucionalChange = (event) => {
    setCorreoInstitucional(event.target.value);
  };

  const handleAlertaGUClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertaGU(false);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Usuario es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
  });

  const defaultValues = {
    email: '',
    password: ''
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      reset();

      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  const onSuccessGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
      );

      try {
        await login(userInfo.data.email);
      } catch (error) {
        setError('afterSubmit', { message: error.message });
      }
    },
    onError: errorResponse => {
      setError('afterSubmit', { message: errorResponse });
    }
  });

  const onCloseDialogGenerarUsuario = () => {
    setOpenDialogGenerarUsuario(false);
    setCorreoInstitucional("");
  };

  const onSubmitGenerarUsuario = async (event) => {
    event.preventDefault();
    setIsSubmittingGU(true);

    try {
      const entrada = JSON.stringify({ tipo_operacion: "generar_usuario_tutor_profesor", perfil: "profesor_secundaria", correo: correoInstitucional });
      const response = await fetch("http://fichaonline.sacooliveros.edu.pe:4010/api/auth/generar_usuario", { headers: { "Content-Type": "application/json" }, method: "POST", body: entrada });
      const { status, message } = await response.json();

      if (!status) {
        setAlertaGUMensaje(message);
        setAlertaGUColor("error");
      } else {
        setAlertaGUMensaje("Se envió un mensaje a su correo institucional!");
        setAlertaGUColor("success");
        setOpenDialogGenerarUsuario(false);
        setCorreoInstitucional("");
      }

      setAlertaGU(true);
      setIsSubmittingGU(false);
    } catch (error) {

    }
  };

  return (
    <>
      {!!errors.afterSubmit && <Alert severity="error" sx={{ mb: 3 }}>{errors.afterSubmit.message}</Alert>}

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ mb: 3 }}>
          <RHFTextField name="email" label="Usuario" />

          <RHFTextField
            name="password"
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Iniciar Sesión
        </LoadingButton>
      </FormProvider>

      <div className="text-line">O</div>

      <Button sx={{ mb: 2 }} onClick={() => onSuccessGoogle()} variant="outlined" startIcon={<GoogleIcon />}>
        Iniciar sesión con google
      </Button>

      <Grid container justifyContent={"center"}>
        <Grid item>
          <Button onClick={() => setOpenDialogGenerarUsuario(true)}>¿Problemas con tu usuario de profesor?</Button>
        </Grid>
      </Grid>

      <Dialog
        open={openDialogGenerarUsuario}
      >
        <form onSubmit={onSubmitGenerarUsuario}>
          <DialogTitle sx={{ mb: 2 }}>Generar usuario</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 2 }}>
              Si es profesor y tiene problemas con su contraseña o no tiene una cuenta, se enviará un mensaje a su correo institucional.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="correo_institucional"
              name="correo_institucional"
              label="Correo institucional"
              type="email"
              fullWidth
              variant="standard"
              value={correoInstitucional}
              onChange={handleCorreoInstitucionalChange}
            />
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={onCloseDialogGenerarUsuario}>Cancelar</Button>
            <LoadingButton type="submit" loading={isSubmittingGU}>
              Generar usuario
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>

      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={alertaGU} autoHideDuration={6000} onClose={handleAlertaGUClose}>
        <Alert
          onClose={handleAlertaGUClose}
          severity={alertaGUColor}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {alertaGUMensaje}
        </Alert>
      </Snackbar >
    </>
  );
}
