import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Events from './Events';
import "./Homepage.scss";

import { useNavigate } from 'react-router-dom';

import HomeSpeedDial from './HomeSpeedDial';

import ResponsiveAppBar from './AppBar';

const Homepage = ({ user, setUser }) => {
  const [renderArray, updateArray] = useState([]);
  const [index, addIndex] = useState(4);


  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const username = urlParams.get('username');


  let navigate = useNavigate();


  useEffect(() => {
    axios.post('http://localhost:8080/getEvent', {
      username: username
    })

      .then(res => updateArray(res.data));

  }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/going', {
  //     theEvent: 
  //   })

  //   .then(res => updateArray(res.data));

  // }, []);

  // useEffect(() => {
  //   if (!user) navigate('/');
  // }, []);

  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
      addIndex(index + 2);
    }
  });
  const updateRender = () => {
    axios.get('http://localhost:8080/getEvent')

      .then(res => updateArray(res.data));

  };
  
//   const getEvent =()=>{
//     const output=[]
//     const newarray=[...renderArray]
//     for(let i=0;i<newarray.length;i++){
      
//      if(newarray[i].eventname.toLowerCase().includes(searchText.toLowerCase())){
//        output.push(newarray[i]);
//      }
//     }
//  updateArray(output);
//    // axios.get('http://localhost:8080/filterEvent', {
//    //   searchText: searchText
//    // })
 
//    //   // .then(res => updateArray(res.data));
//    //   .then(res=>updateArray(res.data))
//    }
   
 
 
 
 
//    const updateText = (e)=>{
 
//      changeText(e.target.value);
 
//    }
//    const goBack = ()=>{
 
//      axios.get('http://localhost:8080/getEvent')
 
//      .then(res => updateArray(res.data));
//    }
 

  return (
    <div className="contents">
      <ResponsiveAppBar user={user} setUser={setUser} />
      {/* <div className='d-flex justify-content-center'>
      <div className='d-flex mt-5 justify-content-center ' style={{width:"400px"}}>
      
        <input onKeyUp={updateText} name={searchText} className="form-control me-2" type="search" placeholder="Search Event" aria-label="Search"/>
        <button onClick={getEvent} className="btn btn-outline-success" type="submit" >Search</button>
        <button onClick={goBack} className="btn btn-outline-primary ms-2"  >Back</button>
    
      </div>
      </div> */}

      <div className='eventBox'>
        {/* <form action='http://localhost:8080/api' method='post'>
        <div className=' border border-dark p-3 mt-5' style={{ width: '400px' }}>
          <div className='d-flex justify-content-start flex-column'>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Event Title</label>
              <input type="text" name='eventTitle' className="form-control" id="exampleFormControlInput1" placeholder="event name" />
              <label name='eventAddress' for="exampleFormControlInput1" className="form-label">Location</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="location" />
              <label for="exampleFormControlInput1" className="form-label">Date</label>
              <input className='form-control' type="date" name="eventDate" id="" />
              <label for="exampleFormControlInput1" className="form-label">Time</label>
              <input className='form-control' type="time" name="eventTime" id="" />
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="text" name='imageLink' className="form-control" id="exampleFormControlInput1" placeholder="image address" />

            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1 " className="form-label mt-3">Description</label>
              <textarea name='eventDescription' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <div className='d-flex justify-content-center'>
                <button className='btn btn-lg btn-primary mt-3' type="submit">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </form> */}



        {renderArray.slice(0, index).map(e => <Events user={user} cards={e} key={e.eventTitle}
          updateRender={updateRender}
        ></Events>)}



      </div>


      <div className="HomeSpeedDial">
        <HomeSpeedDial user={user} />
      </div>

    </div>
  );
};

export default Homepage;