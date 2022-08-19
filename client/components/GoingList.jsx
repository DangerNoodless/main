import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

import Avatar from '@mui/material/Avatar';

export default function InsetList({ eventArray }) {
  // console.log('RECEIVED eventArray', eventArray);

  // eventArray = ['emmanuelMacron', 'johndoe1234', 'theloner'];

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >

      {/* <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Chelsea Otakan" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Eric Hoffman" />
        </ListItemButton>
      </ListItem> */}

      {eventArray.map(username => {
        return <>
          <ListItem disablePadding>
            <ListItemButton>
              <Avatar>{username[0].toUpperCase()}</Avatar>
              <ListItemText inset primary={username} />
            </ListItemButton>
          </ListItem>
        </>;
      })}

    </List>
  );
}
