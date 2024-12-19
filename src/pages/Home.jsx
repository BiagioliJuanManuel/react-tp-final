import { Box, Typography } from "@mui/material"

export const Home = ()=>{


    return(
        <Box style={{display: "flex", flexDirection: "column"}}>
            <Typography variant="h3" sx={{textAlign:"center"}}>
                ¡Bienvenido a la App de Eventos y Tareas!
            </Typography>
        </Box>
    )
}