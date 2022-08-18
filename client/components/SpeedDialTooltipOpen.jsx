import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';

import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PetsIcon from '@mui/icons-material/Pets';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';





export default function SpeedDialTooltipOpen({ banner }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const momo = () => {
    clearInterval(banner);

    document.querySelector('#banner').setAttribute('src', 'https://media.istockphoto.com/photos/very-funny-dog-picture-id499109117');

    // return alert('Momo!');
    return;
  };

  const nico = () => {
    clearInterval(banner);


    document.querySelector('#banner').setAttribute('src', 'https://preview.redd.it/ltz4xfzl8rn41.jpg?auto=webp&s=ebf4e69a38ff35f89cc56ca792fb930da6a2311e');

    // return alert('Nico!');
    return;
  };

  // const play = () => {
  //   setUpdateBanner(setInterval(() => {
  //     document.querySelector('#banner').setAttribute('src', banners[randomBannerIndex++ % banners.length]);

  //     // fetch('https://dog.ceo/api/breeds/image/random')
  //     //   .then((response) => response.json())
  //     //   .then((data) => {
  //     //     // document.querySelector('banner').forEach((image) => {
  //     //     //   image.setAttribute('src', data.message);
  //     //     // });
  //     //     document.querySelector('#banner').setAttribute('src', data.message);
  //     //   });
  //   }, 3000));
  // };

  const actions = [
    { icon: <FavoriteIcon />, name: 'Love', handleClick: momo },
    { icon: <EmojiEmotionsIcon />, name: 'Happiness', handleClick: nico }
    // { icon: <PlayCircleIcon />, name: 'Resume', handleClick: play }
  ];

  return (
    <Box sx={{ height: 0, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<PetsIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.handleClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
