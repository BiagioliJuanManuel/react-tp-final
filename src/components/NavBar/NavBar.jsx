
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import { useState } from 'react';
import { ListMenu } from '../ListMenu/ListMenu';
import { HeaderBar } from '../HeaderBar/HeaderBar';
import { NavLink, Outlet } from 'react-router';

export default function NavBar({children}) {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menu = [
    {
      id: 1,
      title: 'Inicio',
      path: '/',
      icon: <HomeIcon/>
    },
    {
      id: 2,
      title: 'Eventos',
      path: '/eventos',
      icon: <EventIcon/>
    },
    {
      id: 3,
      title: 'Tareas',
      path: '/tareas',
      icon: <AssignmentIcon/>
    },
    {
      id: 4,
      title: 'Usuarios',
      path: '/usuarios',
      icon: <GroupIcon/>
    },
  ]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menu.map(({id, title, path, icon}) => (
          <>
          <NavLink key={id} to={path} style={{textDecoration:"none"}}>
            <ListMenu  title={title} path={path} icon={icon} />
          </NavLink>
          
          </>

        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <HeaderBar setOpen={toggleDrawer(true)} />
    <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
    </Drawer>
    {children}
    <Outlet />
    </Box>  
  </>
  );
}