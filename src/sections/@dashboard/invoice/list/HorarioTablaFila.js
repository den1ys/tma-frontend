// @mui
import { Button, TableRow, TableCell, Typography, Stack, Divider, Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
// hooks
import { useEffect, useState } from 'react';
// axios
import axios from '../../../../utils/axios';

export default function HorarioTablaFila({ row, callback }) {

  const useStyles = makeStyles({
    tableCell: {
      height: "100%"
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
          <Card>
            {obj.libre ?
              <Stack direction="row" sx={{ justifyContent: "center", alignItems: "stretch", borderColor: "#FF3030" }}>
                <Stack sx={{ justifyContent: "center", margin: 1 }}>
                  <Typography noWrap sx={{ fontSize: 11, fontWeight: "bold", textAlign: "center" }}>
                    LIBRE
                  </Typography>
                </Stack>
              </Stack>

              :

              <Stack direction="row">
                <Stack sx={{ justifyContent: "center", margin: 1 }}>
                  <Typography sx={{ fontSize: 9, fontWeight: "bold", textAlign: "center" }}>
                    {obj.start_time}
                  </Typography>

                  <Typography sx={{ fontSize: 9, fontWeight: "bold", textAlign: "center" }}>
                    {obj.end_time}
                  </Typography>
                </Stack>

                <Divider orientation="vertical" variant="middle" flexItem />

                <Stack sx={{ margin: 1, alignItems: "center", flex: "1 1 auto" }}>
                  <Typography noWrap sx={{ fontSize: 11, fontWeight: "bold", textAlign: "center" }}>
                    {obj.course_name}
                  </Typography>

                  <Typography noWrap sx={{ color: 'text.disabled', fontSize: 10, textAlign: "center", whiteSpace: "initial", marginY: 1 }}>
                    {obj.aula}
                  </Typography>

                  <Button variant="outlined" sx={{ marginTop: .5, padding: .5, fontSize: 11 }} onClick={(e) => {
                    callback(obj);
                  }}>
                    Ver material
                  </Button>
                </Stack>
              </Stack>
            }
          </Card>
        </TableCell>
      ))
      }
    </TableRow >
  );
}
