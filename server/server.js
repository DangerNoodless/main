const path = require('path')
const express = require('express')
const app = express();
require('dotenv').config();
const PORT = 3000;
require('dotenv').config();

const cors = require('cors');

const cookieParser = require('cookie-parser');

const eventController = require('./controllers/eventController')
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');

const passport = require('passport');
require('./passport');
const cookieSession = require('cookie-session');

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());
app.use(cookieParser());



//google oAuth2
app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res) => {
  res.json({message: "You are not logged in"})
})

app.get("/failed", (req, res) => {
  res.send("Failed")
})

app.get("/success", (req, res) => {
  res.send(`Welcome ${req.user.email}`)
})

app.get('/google',
  passport.authenticate('google', { scope : ['email', 'profile'] }
));

app.get('/google/callback', passport.authenticate('google', {failureRedirect: '/failed',}), (req, res)  => {
  res.redirect('/success')
  }
);

app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})

//end of oAuth2


// Receive get request from front-end and reply with username
app.post('/login', userController.verifyLogin, (req, res) => {
  console.log('Exit verifyLogin');
  return res.status(200).json(res.locals.myUserInfo);
});

// Receive get request from front-end and reply with username
app.post('/signup', userController.createLogin, (req, res) => {
  console.log('Exit createLogin');
  return res.status(200).send('created a new user');
})

//   ])
// })
//sending request to api
//the object from the request body  
//  {
//      event: "michael's birthday",
//      date: '2022-08-17',
//      email: 'ilovepuffseven@gmail.com',
//      description: 'lets party !!!'
//    }
app.post('/api', eventController.addEvent, (req, res) => {
 console.log('this is post',req.body);
  res.status(200).redirect('http://localhost:8080/home')
  // return res.status(200).send('test-server-return')
})

app.put('/attend', userController.goingButton, (req, res) => {
  res.status(200).send('database updated');
});

app.post('/going', userController.who, (req, res) => {
  console.log('res', res.locals.myList);
  res.status(200).json(res.locals.myList);
});

// interested in event button

// test cookie set

// get all events

app.post('/getEvent', eventController.getEvents, eventController.addIsGoing, (req, res) => {
  
  return res.status(200).json(res.locals.events);
})
// statically serve our build folder if we are in production
if (process.env.NODE_ENV === 'production') {
  // serves the build folder to index.html on <script> tag
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
  });
}

// build
app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
})

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occured' },
  }
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
  console.log('Listening on ', PORT)
})

module.exports = app;