

import React from "react";
import axios from 'axios';

import {useState, useEffect} from 'react';
import './adminNotification.css'

import Spinner from 'react-bootstrap/Spinner';  
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


const AdminNotification = ()=>{


    const [notifications, setNotifications] = useState([])
    const [showAddNotification, setShowAddNotification] = useState(false)

    useEffect(() => {
      fetchData()
    }, [])
    
    const fetchData = async () => {
      await axios.get("http://localhost:90/notification/showNotification").then((res) =>{  
        setNotifications(res.data.notifications)    
      })
    }
    const addNotificationBtn = ()=> {
        setShowAddNotification(true)
    }

    const delteNotification = async (notification_id)=>{
        await axios.delete(`http://localhost:90/notification/deleteNotification/${notification_id}`).then((res) =>{   

          if (res.data === 1){
            fetchData()
          }
          else{
            alert("unable to delete notification")
          }
        })
      }

    const arr = notifications.map((data, index) => {
    
      return (
        
        <tbody>
        <tr>
          <td id="row-1">{index+1}</td>
          <td id="row-1">{data.about}</td>
          <td id="row-1">{data.title}</td>
          <td id="row-1">{data.description}</td>
          <td id="row-1">
          <Button onClick={()=>{
            delteNotification(data._id)
          }}
          variant="danger" id="notification-delete-btn">Delete</Button>
             </td>
        </tr>
        
      </tbody>
      )
    })

    // These are the add notifications codes 
    var [titleState, setTitleState] = useState("")
    var [aboutState, setAboutState] = useState("")
    var [descriptionState, setDescriptionState] = useState("")

    const clearFields = ()=> {
        setTitleState("")
        setAboutState("")
        setDescriptionState("")
    }

    const addNotification =async ()=> { 
        await axios.post(`http://localhost:90/notification/addNotification`, {
        "title" : titleState,
        "about" : aboutState,
        "description" : descriptionState,
      }).then((res) =>{
        if (res.data == 1){
            fetchData();
        }
        else {
            alert("unable to add")
        }
      })
      }

   
  return (
    <div>
        <Alert variant="warning">
        <h2>These are the notifications <Button onClick={addNotificationBtn}
          variant="success" id="notification-delete-btn">Add</Button></h2>  
        </Alert>
      
     
     {notifications.length <= 0 ?  <Spinner animation="border" role="status"></Spinner> : 
<div id="notifications-table">
    
            <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Sn</th>
                <th scope="col">About</th>
    
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {arr}
            
          </table>
      

{showAddNotification 
            
            ? 
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Give Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" 
        onChange={(event)=>{
            setTitleState(event.target.value)
          }} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>What's it about?</Form.Label>
        <Form.Control type="text" placeholder="About" 
        onChange={(event)=>{
            setAboutState(event.target.value)
          }} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Give Description</Form.Label>
        <Form.Control type="textarea" placeholder="Enter description" 
        onChange={(event)=>{
            setDescriptionState(event.target.value)
          }} 
        />
      </Form.Group>

      
      <Button variant="primary" onClick={addNotification}>
        +++
      </Button>
      <Button variant="danger" onClick={()=>{clearFields()}}>
        Clear
      </Button>
    </Form>
            : 
                ""
            }
      </div>
     } 
    </div>
  );    
}




export default AdminNotification;