// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Avatar, Divider, Typography, Stack, Button } from '@mui/material';
// utils
import cssStyles from '../../../../utils/cssStyles';
// components
import Image from '../../../../components/Image';
import SvgIconStyle from '../../../../components/SvgIconStyle';

const OverlayStyle = styled('div')(({ theme }) => ({
  ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
  top: 0,
  zIndex: 8,
  content: "''",
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function TipoMaterialCard({ tipo_material }) {
  const { id, nombre, tipo_archivo_id, es_archivo_descarga, callback } = tipo_material;

  const numeroRandom = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <Card sx={{ textAlign: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <SvgIconStyle
          src="https://minimal-assets-api-dev.vercel.app/assets/icons/shape-avatar.svg"
          sx={{
            width: 144,
            height: 62,
            zIndex: 10,
            left: 0,
            right: 0,
            bottom: -26,
            mx: 'auto',
            position: 'absolute',
            color: 'background.paper',
          }}
        />
        <Avatar
          alt={nombre}
          src={`./assets/images/logo.jpg`}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: 'auto',
            position: 'absolute',
          }}
        />
        <OverlayStyle />
        <Image src={`https://picsum.photos/id/${numeroRandom(1, 30)}/200/100`} alt="Imagen de fondo" />
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 6 }}>
        {nombre}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        Saco Oliveros
      </Typography>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack direction="row" justifyContent="center" sx={{ my: 2 }}>
        <Button variant="contained" onClick={() => { callback({ id, nombre, tipo_archivo_id, es_archivo_descarga }); }}>
          {!es_archivo_descarga ? "Ver material" : "Descargar material"}
        </Button>
      </Stack>
    </Card>
  );
}
