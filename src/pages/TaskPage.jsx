import { Box, Typography } from "@mui/material";
import { CustomTable } from "../components/Table/CustomTable";
import useFetch from "../hooks/useFetch";
import { getTasks } from "../services/TaskService";
import { formatDate } from "../utils/formatDate";

export const TaskPage = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const endPoint = import.meta.env.VITE_TASK_ENDPOINT;
  const url = baseURL + endPoint;

  const { data, loading } = useFetch(url, getTasks);

//   console.log(data.body);

  const fields = [
    {
      id: 1,
      title: "Titulo",
      key: "titulo",
    },
    {
      id: 2,
      title: "Descripcion",
      key: "descripcion",
    },
    {
      id: 3,
      title: "Fecha Tentativa",
      key: "fecha",
    },
    {
      id: 4,
      title: "Prioridad",
      key: "prioridad",
    },
    {
      id: 5,
      title: "Realizada",
      key: "realizada",
    },
  ];

  const tasks = data?.body
    ? data.body.map(
        ({
          _id,
          titulo,
          descripcion,
          prioridad,
          completada,
          "fecha-limite": fecha,
        }) => ({
          id: _id,
          titulo,
          descripcion,
          prioridad,
          completada,
          fecha: formatDate(fecha),
        })
      )
    : [];

  if (loading) {
    return <Typography>Cargando tareas...</Typography>;
  }

  if (!tasks.length) {
    return <Typography>No hay tareas disponibles</Typography>;
  }

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Tareas
      </Typography>
      <CustomTable field={fields} data={tasks} />
    </Box>
  );
};
