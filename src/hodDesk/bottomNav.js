import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(10)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 3 }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItemButton key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItemButton>
        ))}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Approved Applications" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Pending Applications" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Dean Desk" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  {
    primary: 'Mechanical Approns',
    secondary: "8 Different Application by XYZ Professor",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Dell Computers',
    secondary: `8 Different Application by XYZ Professor`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Osilloscopes',
    secondary: '8 Different Application by XYZ Professor',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Microscopes',
    secondary: '8 Different Application by XYZ Professor',
    person: '/static/images/avatar/3.jpg',
  },
  {
    primary: "Health Department",
    secondary: '8 Different Application by XYZ Professor',
    person: '/static/images/avatar/4.jpg',
  },
  {
    primary: 'Sport Department',
    secondary: `8 Different Application by XYZ Professor`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Summer Intern Equipments',
    secondary: `8 Different Application by XYZ Professor`,
    person: '/static/images/avatar/1.jpg',
  },
];