// @mui
import { Button, TableRow, TableCell, Typography, Stack, Divider, Card } from '@mui/material';
// hooks
import { useState } from 'react';
// axios
import axios from '../../../../utils/axios';

export default function HorarioTablaFila({ row, callback }) {

  return (
    <TableRow>
      {row.map((obj, index) => (
        <TableCell key={index} sx={{ padding: 1 }}>
          <Card>
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

                <Typography noWrap sx={{ color: 'text.disabled', fontSize: 10, textAlign: "center", paddingBottom: 1 }}>
                  {obj.aula}
                </Typography>

                <Button variant="outlined" sx={{ marginTop: .5, padding: .5, fontSize: 11 }} onClick={(e) => {
                  callback(obj);
                }}>
                  Ver material
                </Button>
              </Stack>
            </Stack>
          </Card>
        </TableCell>
      ))
      }
    </TableRow >
  );
}
