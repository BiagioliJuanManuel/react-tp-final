import { Box, Button } from "@mui/material"

export const Buttons = ({buttons})=>{
    return (
        <Box style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
            {buttons?.map((button)=>(
                <Button key={button.id} color={button.color} >
                    {button.label}
                </Button>
            ))}
        </Box>
    )
}