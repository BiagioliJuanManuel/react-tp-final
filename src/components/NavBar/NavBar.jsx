
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

export default function NavBar() {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menu = [
    {
      id: 1,
      title: 'Inicio',
      path: '',
      icon: <HomeIcon/>
    },
    {
      id: 2,
      title: 'Eventos',
      path: '',
      icon: <EventIcon/>
    },
    {
      id: 3,
      title: 'Tareas',
      path: '',
      icon: <AssignmentIcon/>
    },
    {
      id: 4,
      title: 'Usuarios',
      path: '',
      icon: <GroupIcon/>
    },
  ]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menu.map(({id, title, path, icon}) => (
            <ListMenu  key={id} title={title} path={path} icon={icon} />
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
    </Box>  
  </>
  );
}