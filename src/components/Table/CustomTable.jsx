import {
    Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export const CustomTable = ({ field, data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (!data || data.length === 0) {
    return <Typography>No data available</Typography>;
  }

  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
    <TableContainer sx={{width: "90%"}}>
      <Table>
        <TableHead>
          <TableRow>
            {field.map((field) => (
              <TableCell key={field.id}>
                <Typography sx={{ fontWeight: "bold" }}>
                  {field.title}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.id}>
              {field.map((f) => (
                <TableCell key={f.id}>
                  <Typography>{d[f.key] ?? "-"}</Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};
