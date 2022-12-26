// @mui
import { Button, TableRow, TableCell, Typography, Stack, Divider, Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
// hooks
import { useEffect, useState } from 'react';

export default function HorarioTablaFila({ row, callback }) {
  const useStyles = makeStyles({
    tableCell: {
      position: "relative"
    }
  });

  const classes = useStyles();

  const [fila, setFila] = useState([]);

  useEffect(() => {
    setFila(actual => [...actual, ...[1, 2, 3, 4, 5, 6].map((valor, index) => {
      let obj = row.find(e => e.dia === valor);

      if (obj) {
        return obj;
      } else {
        return { dia: index + 1, libre: true };
      }
    })]
    );
  }, []);

  return (
    <TableRow>
      {fila.map((obj, index) => (
        <TableCell key={index} sx={{ padding: 1 }} className={classes.tableCell} style={{ width: "16.6%" }}>
          {obj.libre ?
            <Card sx={{ display: "flex", position: "absolute", top: "8px", right: "8px", bottom: "8px", left: "8px" }}>
              <Stack sx={{ justifyContent: "center", alignItems: "center", flex: "1 1 auto", margin: 1 }}>
                <Typography sx={{ fontSize: 11, fontWeight: "bold", textAlign: "center" }}>
                  LIBRE
                </Typography>

                <Typography sx={{ fontSize: 9, fontWeight: "bold", textAlign: "center" }}>
                  --:--:-- - --:--:--
                </Typography>
              </Stack>
            </Card>
            :
            <Card sx={{ display: "flex" }}>

              <Stack sx={{ alignItems: "center", flex: "1 1 auto", margin: 1 }}>
                <Typography noWrap sx={{ fontSize: 11, fontWeight: "bold", textAlign: "center" }}>
                  {obj.curso_nombre}
                </Typography>

                <Typography noWrap sx={{ color: 'text.disabled', fontSize: 10, textAlign: "center", whiteSpace: "initial", marginTop: 1 }}>
                  {obj.aula}
                </Typography>

                <Typography noWrap sx={{ color: 'text.disabled', fontSize: 10, textAlign: "center", whiteSpace: "initial", marginBottom: 1 }}>
                  {obj.sede}
                </Typography>

                <Typography sx={{ fontSize: 9, fontWeight: "bold", textAlign: "center" }}>
                  {obj.hora_inicio} - {obj.hora_fin}
                </Typography>


                <Button variant="outlined" sx={{ marginTop: .5, padding: .5, fontSize: 11 }} onClick={(e) => {
                  callback(obj);
                }}>
                  Ver material
                </Button>
              </Stack>
            </Card>
          }
        </TableCell>
      ))
      }
    </TableRow >
  );
}
