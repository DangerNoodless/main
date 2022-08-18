import React, { useEffect } from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from './AppBar';

// import Box from '@material-ui/core/Box';
// import { Input } from '@material-ui/core';
// import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button'
// import { SxProps } from '@mui/system';

import Box from '@mui/material/Box';
// import { Input } from '@mui/material';
// import Input from '@material-ui/core/Input';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

import { Modal } from '@mui/material';
import SpeedDialTooltipOpen from './SpeedDialTooltipOpen';

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let banner;

  // let banner = setInterval(() => {
  //   document.querySelector('#banner').setAttribute('src', banners[randomBannerIndex++ % banners.length]);

  // //   // fetch('https://dog.ceo/api/breeds/image/random')
  // //   //   .then((response) => response.json())
  // //   //   .then((data) => {
  // //   //     // document.querySelector('banner').forEach((image) => {
  // //   //     //   image.setAttribute('src', data.message);
  // //   //     // });
  // //   //     document.querySelector('#banner').setAttribute('src', data.message);
  // //   //   });
  // }, 3000);

  // dummy data
  // const [users, setUsers] = useState([{ username: 'test', password: 'test' }]);
  // const [updateBanner, setUpdateBanner] = useState(setInterval(() => {
  //   document.querySelector('#banner').setAttribute('src', banners[randomBannerIndex++ % banners.length]);

  //   // fetch('https://dog.ceo/api/breeds/image/random')
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     // document.querySelector('banner').forEach((image) => {
  //   //     //   image.setAttribute('src', data.message);
  //   //     // });
  //   //     document.querySelector('#banner').setAttribute('src', data.message);
  //   //   });
  // }, 3000));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    // height: 300,
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // dummy users data
  // const users = [
  //   {
  //     username: 'test',
  //     password: 'test',
  //   },
  // ];

  // dummy images
  const banners = [
    'https://cdn.musicfeeds.com.au/assets/uploads/2021/02/Rick-roll-2021.png',
    // 'https://vickyflipfloptravels.com/wp-content/uploads/2015/02/19-Things-You-16.jpg.webp',
    'https://e7.pngegg.com/pngimages/691/148/png-clipart-comic-black-circles-dark-circles-remove-eyes-bags-thumbnail.png',
    'https://thumbs.dreamstime.com/z/l-letter-hand-drawn-symbol-vector-illustration-big-english-black-white-roman-alphabet-typographic-can-be-used-as-logo-201773010.jpg',
    'https://media.istockphoto.com/photos/very-funny-dog-picture-id499109117'];

  let randomBannerIndex = Math.floor(Math.random() * banners.length);




  useEffect(() => {
    console.log('USER IN LOGIN PAGE', user);

  }, []);

  useEffect(() => {
    banner = setInterval(() => {
      document.querySelector('#banner').setAttribute('src', banners[randomBannerIndex++ % banners.length]);

      //   // fetch('https://dog.ceo/api/breeds/image/random')
      //   //   .then((response) => response.json())
      //   //   .then((data) => {
      //   //     // document.querySelector('banner').forEach((image) => {
      //   //     //   image.setAttribute('src', data.message);
      //   //     // });
      //   //     document.querySelector('#banner').setAttribute('src', data.message);
      //   //   });
    }, 3000);
    return () => clearInterval(banner);
  }, []);



  async function handleLogin() {
    // testing with dummy data
    // for (const user of users) {
    //   if (user.username === username && user.password === password) {
    //     clearInterval(banner);
    //     return navigate('/Home');
    //   }
    // }

    if (!username || !password) {
      return alert('Invalid Username/Password');
    }

    const postBody = {
      username,
      password
    };

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody)
    };

    await fetch('/login', postOptions)
      .then((data) => data.json())
      .then((data) => {
        // if (data) {
        //   navigate('/home')
        // }
        // else return alert('Invalid Login');
        // if (data.length === 0) return alert('Invalid Login');



        /*
          data
        */
        console.log('THIS IS DATA', data);
        setUser(data);

        const {
          firstName,
          lastName,
          username
        } = data;

        console.log('USER AFTER LOGIN', user);

        setUsername('');
        setPassword('');

        // return navigate('/home');
        return window.location.href = `http://localhost:8080/home?username=${username}&name=${firstName.concat(' ', lastName)}`;
      })
      .catch((error) => {
        // console.log('THIS IS LOGIN ERROR:', error);

        setUsername('');
        setPassword('');

        return alert('Login Failed');
      });

    // clearInterval(banner);



    // return alert('Login Failed');
  }

  async function signUp(event) {
    event.preventDefault();

    // setUsers((prev) => {
    //   // console.log('before', prev);
    //   prev.push({ username, password });
    //   // console.log('after', prev);
    //   return prev;
    // });

    // console.log('users after', users);

    // if (!username || !password) {
    //   return alert('Invalid Username/Password');
    // }


    const postBody = {
      username: signupUsername,
      password: signupPassword,
      firstName,
      lastName
    };

    console.log('POST BODY', postBody);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody)
    };

    await fetch('/signup', postOptions)
      .then((data) => data.json())
      .then((data) => {
        // if (data) {
        //   navigate('/home')
        // }
        // else return alert('Invalid Login');

        console.log('THIS IS DATA @ SINGUP', data);

        setSignupUsername('');
        setSignupPassword('');
        setFirstName('');
        setLastName('');

        setOpen(false);

        return alert('Signup Complete');
      })
      .catch((error) => {
        console.log(error);

        console.log('THIS IS THE ERROR', error);

        setOpen(false);
        return alert('Username Already Exists');
      });
  };

  return (
    <div className="loginContents">
      {/* <ResponsiveAppBar banner={banner} /> */}


      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <div className="signupbox">
            <center>
              <h6>Sign up to see events your friends are planning to attend!</h6>
            </center>

            <div className='signupbox-input'>
              <form className='signupbox-input'>

                <TextField
                  id="filled-basic"
                  label="First Name"
                  variant="filled"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  sx={{
                    borderRadius: '0px',
                    // borderColor: 'green',
                  }}
                />

                <TextField
                  id="filled-basic"
                  label="Last Name"
                  variant="filled"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  sx={{
                    borderRadius: '0px',
                    // borderColor: 'green',
                  }}
                />

                <TextField
                  id="filled-basic"
                  label="Username"
                  variant="filled"
                  type="text"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                  sx={{
                    borderRadius: '0px',
                    // borderColor: 'green',
                  }}
                />

                <TextField
                  id="filled-basic"
                  label="Password"
                  variant="filled"
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  sx={{
                    borderRadius: '0px',
                    // backgroundColor: 'green'
                  }}
                />
              </form>

            </div>

            <Button
              type="submit"
              onClick={signUp}
              variant="contained"
              sx={{
                width: '100%',
                // padding: '1rem 0'
              }}
            >
              Sign Up
            </Button>
          </div>
        </Box>
      </Modal>

      <div className="login">
        <div className="loginleft">
          <img
            id='banner'
            width="100%"
            height="100%"
            src="https://res.cloudinary.com/teepublic/image/private/s--fTcgZW4X--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1573969065/production/designs/6761858_0.jpg"
          />
          {/* <img src={require("https://images-na.ssl-images-amazon.com/images/I/31Xzh6LfzeL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")} alt={"Danger Noodle"}/> */}

          {/* <div className='specialButtons'>
            <Button
              type="submit"
              onClick={handleLogin}
              variant="contained"
              sx={{
                width: '300px',
              }}
            >
              Login
            </Button>

            <Button
              type="submit"
              onClick={handleOpen}
              variant="contained"
              sx={{
                width: '300px',
                // padding: '1rem 0'
              }}
            >
              Sign Up
            </Button>
          </div> */}

        </div>

        <div className="loginright">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              // color: 'primary.main',
              // '&:hover': {
              //   backgroundColor: 'primary.main',
              //   opacity: [0.9, 0.8, 0.7],
              // },
            }}
          >
            <center>
              <h1>Who's Going?</h1>
            </center>

            <TextField
              id="filled-basic"
              label="Username"
              variant="filled"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                borderRadius: '0px',
                // borderColor: 'green',
              }}
            />

            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                borderRadius: '0px',
                // backgroundColor: 'green'
              }}
            />

            <div className="loginButtons">
              <Button
                type="submit"
                onClick={handleLogin}
                variant="contained"
                sx={{
                  width: '48%',
                }}
              >
                Login
              </Button>

              <Button
                type="submit"
                onClick={handleOpen}
                variant="contained"
                sx={{
                  width: '48%',
                  // padding: '1rem 0'
                }}
              >
                Sign Up
              </Button>
            </div>
          </Box>
        </div>
      </div>


      <div className="SpeedDial">
        <SpeedDialTooltipOpen banner={banner} />
      </div>

    </div>
  );
};

export default Login;
