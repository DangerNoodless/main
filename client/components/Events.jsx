import React from 'react'
import { useState } from 'react'
import axios from 'axios';

import Button from '@mui/material/Button'

import EventListModal from './EventListModal';

const Events = (props) => {
  // const [eventArray, setEventArray] = useState([]);

  let eventArray = [];

  async function getEventArray(event) {
    // console.log('EVENT ARRAY', eventArray);
    const postBody = {
      eventName: props.cards.eventName
    };

    // // console.log('POST BODY', postBody);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody)
    };

    await fetch('/going', postOptions)
      .then((data) => data.json())
      .then((data) => eventArray = data)
      .catch((error) => {
        // console.log(error);

        console.log('THIS IS THE ERROR', error);


        
        return alert('Failed to get the list of events');
      });
  }



const [pop,setPop] = useState('none')
const [inorout,changeInOut] = useState(true);
const [inoroutText,changeinoroutText] = useState('I AM IN')
const [attendBTN,changeBTN] = useState('btn btn-lg btn-primary');

const popfunction = ()=>{
    if(pop ==='block') {setPop('none')}else{setPop('block');}


    
}



const attend = () =>{
  console.log('PROPS BEFORE PUSHING IM GOING', props);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const username = urlParams.get('username');
  
  axios.put("http://localhost:8080/attend", {
    going:inorout,
    theUser: username,
    eventName: props.cards.eventname
   
  })
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
   if(inorout ===true) {
    changeinoroutText('I AM OUT')
    changeBTN('btn-danger btn-lg btn')
    changeInOut(false)}else{
      changeinoroutText('I AM IN')
      changeBTN('btn btn-lg btn-success')
    changeInOut(true)}

  
    props.updateRender();
   
}

  return (
    
    
   <div className='d-flex mt-5 justify-content-center'>

<div className="card" style={{ width: "40rem"}}>
  <img src={props.cards.imgsrc} className="card-img-top w-100"style={{width:"22rem",height:"25rem"}} alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title fs-2">Events Name</h5>
    {/* grab data from database with name/data/number people attend */}
    <p className="card-text fs-2">{props.cards.eventname}</p>
    <div className="Participants">
      <p className="card-text">{props.cards.participants} Participants</p>    
      {/* <Button
          type="submit"
          onClick={getEventArray}
          variant="contained"
          sx={{
            width: '30%',
            // padding: '1rem 0'
            marginLeft: '20px',
            height: '30px'
          }}
        >
          See Who's Going
      </Button> */}

      <EventListModal eventArray={eventArray} getEventArray={getEventArray} />
    </div>
    <p className="card-text fs-4"><img src="https://www.technipages.com/wp-content/uploads/2020/10/fix-google-maps-not-updating-location-600x341.png" alt="" style={{width:'50px'}}/>{props.cards.location}</p>
    <p className="card-text fs-4"> <img src="https://storage.needpix.com/rsynced_images/clock-4314041_1280.jpg" alt="" style={{width:'50px'}}/>{props.cards.date} / {props.cards.time}</p>
    <button  onClick={attend} className={attendBTN}>{inoroutText}</button>
    <button onClick={popfunction} className="btn btn-success btn-info ms-3 btn-lg">Description</button>
    <div className='pop fs-5 fw-bold mt-4' style={{display:pop}}>{props.cards.eventdescription}</div>
    
  </div>
</div>

   </div>
  )
}

export default Events



{/* <div className="card" style={{width: "23rem"}}>
  <img src="https://cdn.shopify.com/s/files/1/0003/3279/1871/files/DSC06029.jpg?v=1632317105" class="card-img-top" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title">Events Name</h5>
    {/* grab data from database with name/data/number people attend */}
//     <p className="card-text">Motorcycle Party</p>
//     <p className="card-text">20 Participants</p>
//     <p className="card-text"><img src="https://www.technipages.com/wp-content/uploads/2020/10/fix-google-maps-not-updating-location-600x341.png" alt="" style={{width:'50px'}}/>330 laurel ave</p>
//     <p className="card-text"> <img src="https://storage.needpix.com/rsynced_images/clock-4314041_1280.jpg" alt="" style={{width:'50px'}}/>Aug 10 / 8:30PM</p>
//     <button  onClick={attend} className="btn btn-success btn-lg">I AM IN</button>
//     <button onClick={popfunction} className="btn btn-success btn-info ms-3 btn-lg">Description</button>
//     <div className='pop fs-5 fw-bold mt-4' style={{display:pop}}>Save the date! Heat up the streets with us during Bike Night. Enjoy live music from Full Circle, delicious tacos, beautiful babes, bikes, vendors and ice-cold beer. </div>
    
//   </div>
// </div> */}