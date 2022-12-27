import * as Yup from 'yup';
import { useState, useEffect } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Alert, IconButton, InputAdornment, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import GoogleIcon from '@mui/icons-material/Google';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
// anothers
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
// css
import './LoginForm.css';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { login } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

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


  const onSuccessGoogle = async (res) => {
    const perfil = res.profileObj;

    try {
      await login(perfil.email);
    } catch (error) {
      setError('afterSubmit', { message: error.message });
    }
  };

  const onFailureGoogle = (error) => {
    setError('afterSubmit', { message: error.message });
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

      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        hostedDomain={process.env.REACT_APP_GOOGLE_WORKSPACE_DOMAIN}
        render={renderProps => (
          <Button onClick={renderProps.onClick} variant="outlined" startIcon={<GoogleIcon />}>
            Iniciar sesión con google
          </Button>
        )}
        onSuccess={onSuccessGoogle}
        onFailure={onFailureGoogle}
      />
    </>
  );
}
