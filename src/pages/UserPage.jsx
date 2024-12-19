import { Box, Typography } from "@mui/material";
import { CustomTable } from "../components/Table/CustomTable";
import useFetch from "../hooks/useFetch";
import { getUsers } from "../services/UserService";
import { Buttons } from "../components/Buttons/Buttons";

export const UserPage = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const endPoint = import.meta.env.VITE_USER_ENDPOINT;
  const url = baseURL + endPoint;
  const { data, loading } = useFetch(url, getUsers);

  const buttons = [
    {
        id: 1,
        color: 'secondary',
        label: 'Agregar'
    },
    {
        id: 2,
        color: 'success',
        label: 'Editar'
    },
    {
        id: 3,
        color: 'error',
        label: 'Eliminar'
    },
    {
        id: 4,
        color: 'primary',
        label: 'Buscar Eventos'
    },
  ]

  const fields = [
    {
      id: 1,
      title: "Nombre",
      key: "nombre",
    },
    {
      id: 2,
      title: "Email",
      key: "correo",
    },
    {
      id: 3,
      title: "Telefono",
      key: "telefono",
    },
  ];

  const users = data.map(({ nombre, correo, telefono }) => ({
    id: crypto.randomUUID(),
    nombre,
    correo,
    telefono,
  }));

  if (loading) {
    return <Typography>Cargando usuarios...</Typography>;
  }

  if (!users.length) {
    return <Typography>No hay usuarios disponibles</Typography>;
  }


  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Usuarios
      </Typography>
      <CustomTable field={fields} data={users} />
      <Buttons buttons={buttons}/>
    </Box>
  );
};
