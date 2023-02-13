
import './profile.css'
import {useState, useEffect} from 'react';

import React from "react";
import axios from 'axios';
import Login from '../login/Login';

import { useNavigate } from "react-router-dom";

import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';

const Profile = ()=>{
    var userID = Login.userID;
    const [firstNameState, setFirstNameState] = useState("")
    const [lastNameState, setLastNameState] = useState("")
    const [emailState, setEmailState] = useState("")
    const [addressState, setAddressState] = useState("")
    const [ageState, setAgeState] = useState("")
    const [usernameState, setUsernameState] = useState("")
    const [hirerNameState, setHirerNameState] = useState("")

    const nav = useNavigate();

    useEffect(() => {
      fetchData()
    }, [])
    const fetchData = async () => {
      await axios.post("http://localhost:90/users/profile", {
        "userID" : "62c91498ec6eb80557a4b73e"
      }).then((res) =>{
         
        setFirstNameState(res.data.firstName)
        setLastNameState(res.data.lastName)
        setEmailState(res.data.email)
        setAddressState(res.data.address)
        setAgeState(res.data.age)
        setUsernameState(res.data.username)
        setHirerNameState(res.data.hirer)
      })
    }

    var dataReceived = setFirstNameState.length > 0;

    const showGigs = async () => {
      nav("/userGigs");
    }

    return (
        <div id='body-div'>
          <Alert variant="success">
          <h2>Checkout Your Profile</h2>
        </Alert>
            
            {!dataReceived ? 
            <Spinner animation="border" role="status"></Spinner>
            : 
            
            <Row id='profile-row'>
              

    <div class="grid-7 element-animation">
              

    <div class="card color-card">
   
      <ul>
        <li><i class="fas fa-arrow-left i-l w"></i></li>
        <li><i class="fas fa-ellipsis-v i-r w"></i></li>
        <li><i class="far fa-heart i-r w"></i></li>
      </ul>
      <img src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7d5363c18112a02ce22d0c46f8570147&auto=format&fit=crop&w=635&q=80%20635w" alt="profile-pic" class="profile" />
      <h1 class="title">{firstNameState} {lastNameState}</h1>
      
      <p class="job-title">{addressState}</p>
      <div class="desc top">
        <p>Email : {emailState}</p>
      </div>
      <div class="desc top">
        
        <p>Username : {usernameState}</p>
      </div>
      <div class="desc top">
      <button class="btn color-a top" onClick={showGigs}> My Gigs </button>
      </div>
      <br></br>

        <div class="content">
          <div class="grid-2">
            <button class="color-b circule"> <i class="fab fa-dribbble fa-2x"></i></button>
            <h2 class="title">{ageState}</h2>
            <p class="followers">Years Old</p>
          </div>
          <div class="grid-2">
            <button class="color-c circule"><i class="fab fa-behance fa-2x"></i></button>
            <h2 class="title">16k</h2>
            <p class="followers">Work Completion</p>
          </div>
          <div class="grid-2">
            <button class="color-d circule"><i class="fab fa-github-alt fa-2x"></i></button>
            <h2 class="title">17.8k</h2>
            <p class="followers">Hires</p>
          </div>
        </div>  
    </div>
  </div>

  <div class="grid-7 element-animation">
  <Card className="text-center">
      <Card.Header>Work History</Card.Header>
      <Card.Body>
        <Card.Title>Your Works In Brief</Card.Title>
        <Card.Text>
        With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">aa</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>

    <div class="grid-7 element-animation">
    <Card className="text-center">
      <Card.Header>Hire History</Card.Header>
      <Card.Body>
        <Card.Title>Your Hire In Brief</Card.Title>
        <Card.Text>
          {hirerNameState}

        </Card.Text>
        <Button variant="primary">aa</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
            </Row>         
            
            }

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet"></link>
        </div>
    )
}

export default Profile;