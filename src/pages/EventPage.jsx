import { Box, Typography } from "@mui/material";
import { CustomTable } from "../components/Table/CustomTable";
import useFetch from "../hooks/useFetch";
import { getEvents } from "../services/EventService";
import { formatDate } from "../utils/formatDate";

export const EventPage = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const endPoint = import.meta.env.VITE_EVENT_ENDPOINT;
  const url = baseURL + endPoint;

  const { data, loading } = useFetch(url, getEvents);

//   console.log(data);

  const fields = [
    {
      id: 1,
      title: "Nombre",
      key: "name",
    },
    {
      id: 2,
      title: "Lugar",
      key: "lugar",
    },
    {
      id: 3,
      title: "Fecha",
      key: "fecha",
    },
    {
      id: 4,
      title: "Categoria",
      key: "categoria",
    },
    {
      id: 5,
      title: "Anfitrion",
      key: "anfitrion",
    },
  ];

  const events = data
    ? data?.map(({ _id, name, lugar, fecha, categoria, anfitrion }) => ({
        id: _id,
        name,
        lugar,
        fecha: formatDate(fecha),
        categoria,
        anfitrion,
      }))
    : [];

  if (loading) {
    return <Typography>Cargando eventos...</Typography>;
  }

  if (!events.length) {
    return <Typography>No hay eventos disponibles</Typography>;
  }

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Eventos
      </Typography>
      <CustomTable field={fields} data={events} />
    </Box>
  );
};
