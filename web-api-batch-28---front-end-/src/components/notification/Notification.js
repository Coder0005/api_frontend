

import React from "react";
import axios from 'axios';

import {useState, useEffect} from 'react';
import './notification.css'

import Spinner from 'react-bootstrap/Spinner';  
import Alert from 'react-bootstrap/Alert';

const Notification = ()=>{


    const [notifications, setNotifications] = useState([])

    useEffect(() => {
      fetchData()
    }, [])
    
    const fetchData = async () => {
      await axios.get("http://localhost:90/notification/showNotification").then((res) =>{  
        setNotifications(res.data.notifications)    
      })
    }

    const arr = notifications.map((data, index) => {
    
      return (
        <tbody>
        <tr  id="tableRow">
          <td id="row-1">{index+1}</td>
          <td id="row-1">{data.about}</td>
          <td id="row-1">{data.title}</td>
          <td id="row-1">{data.description}</td>
        </tr>
        
      </tbody>
      )
    })

  return (
    <div>
      <h2>These are the notifications</h2>  
     
     {notifications.length <= 0 ?  <Spinner animation="border" role="status"></Spinner> : 
<div id="notifications-table">
        <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Sn</th>
            <th scope="col">About</th>

            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        {arr}
        
      </table>
      </div>
     } 
    </div>
  );    
}

export default Notification;