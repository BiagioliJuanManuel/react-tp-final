import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export const ListMenu = ({id, title, path,icon})=>{
    return(
        <ListItem key={id} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    )
}