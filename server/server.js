const path = require('path')
const express = require('express')
const app = express();
const PORT = 3000;

const cors = require('cors');

const cookieParser = require('cookie-parser');

const eventController = require('./controllers/eventController')
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());
app.use(cookieParser());


// Receive get request from front-end and reply with username
app.post('/login', userController.verifyLogin, (req, res) => {
  console.log('Exit verifyLogin');
  console.log(res.locals.myUsername);
  return res.status(200).json(res.locals.myUsername);
});

// Receive get request from front-end and reply with username
app.post('/signup', userController.createLogin, (req, res) => {
  console.log('Exit createLogin');
  return res.status(200).send('created a new user');
})
// app.get('/getEvent',(req,res)=>{

//   // return res.status(200).send(res.local)

//   return res.status(200).send([
//     {
//       eventTitle:'Jacob "s birthday',
//       participants:100,
//       eventAddress:'300 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 20th 2022',
//       eventTime:'8:20PM',
//       eventDescription:'Have fun ',
//       imageLink:"https://c.tenor.com/BF4LXetTi0kAAAAd/birthday-wishes.gif"
//   },
//   {
//     eventTitle:'Michael "s birthday',
//     participants:100,
//     eventAddress:'300 1st street,Arcadia,CA,91006',
//     eventDate:'Oct 20th 2022',
//     eventTime:'8:20PM',
//     eventDescription:'Have fun ',
//     imageLink:"https://www.funimada.com/assets/images/cards/big/bday-254.gif"
// },

//   {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   },
//   {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   },
//   {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   },
//   {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   }
//   , {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   }
//   , {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   }
//   , {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   },
//   {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   },
//   {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   },
//   {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   },
//   {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   },
//   {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   },
//   {
//     eventTitle:'Motorcycle party',
//       participants:999,
//       eventAddress:'100 1st street,Arcadia,CA,91006',
//       eventDate:'Oct 10th 2022',
//       eventTime:'8:30PM',
//       eventDescription:'Let"party',
//       imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
//   }

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
app.post('/api',  (req, res) => {
 
 console.log('this is post',req.body);
 
  res.status(200)
  // return res.status(200).send('test-server-return')
})

app.put('/attend',  (req, res) => {
 
  console.log('this is put',req.body);
  
   res.status(200)
   // return res.status(200).send('test-server-return')
 })

// interested in event button

// test cookie set

// get all events

app.get('/getEvent', eventController.getEvents, (req, res) => {
  console.log('successfully get events');
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