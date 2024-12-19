import { Box, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "90vh",
      padding: "2rem",
      gap: "1.5rem",
    }}
  >

    <Typography variant="h3" sx={{ textAlign: "center", color: "#1976d2" }}>
      ¡Bienvenido a la App de Eventos y Tareas!
    </Typography>

  
    <Typography
      variant="h5"
      sx={{ textAlign: "center", color: "#424242", fontWeight: "500" }}
    >
      Organiza tus actividades y mejora tu productividad.
    </Typography>

 
    <Typography
      sx={{
        textAlign: "center",
        color: "#616161",
        maxWidth: "700px",
        lineHeight: "1.6",
      }}
    >
      Esta aplicación es una agenda digital diseñada para facilitar la
      organización y el seguimiento de actividades. Permite gestionar eventos,
      tareas y usuarios de manera intuitiva, ofreciendo herramientas para
      visualizar listas, agregar entradas y consultar información relevante.
    </Typography>
    </Box>
  );
};
