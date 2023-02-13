

import React , {useState} from 'react';

import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AdminRegisterUser = ()=>{

    
  const nav = useNavigate();
    // Creating states for the entries
    var [FnameState, setFnameState] = useState("")
    var [LnameState, setLnameState] = useState("")
    var [EmailState, setEmailState] = useState("")
    var [AddressState, setAddressState] = useState("")
    var [AgeState, setAgeState] = useState("")
    var [UsernameState, setUsernameState] = useState("")
    var [PasswordState, setPasswordState] = useState("")

    const clear = ()=>{
      setFnameState("");
      setLnameState("");
      setEmailState("");
      setAddressState("");
      setAgeState("");
      setUsernameState("");
      setPasswordState("");
  }

  const submit =async ()=>{
    await axios.post("http://localhost:90/users/addUser", {
      firstName : FnameState,
      lastName : LnameState,
      email : EmailState, 
      address : AddressState,
      age : AgeState,
      username : UsernameState,
      password : PasswordState 
    }).then((res) =>{
         if (String(res.data) === "1"){
          clear()
          alert("User Registered Successfully")
            window.location.reload(false);
         }
         else {
          alert("Couldn't create user!")
         }
      })
  }
    return (
      <div id='form-container'>

<form id='register-form'>
        <h2>Join The Club Of The Best!</h2>
        <br></br><br></br>
      <div class="form-group">
        <label for="fname">First Name</label><br></br>
        <input onChange={(event)=>{
          setFnameState(event.target.value)
        }} type="text" class="form-control" id="fname" value={FnameState}/>
      </div><br></br>
      <div class="form-group">
        <label for="lname">Last Name</label><br></br>
        <input onChange={(event)=>{
          setLnameState(event.target.value)
        }} type="text" class="form-control" id="lname" value={LnameState} />
      </div><br></br>
      <div class="form-group">
        <label for="email">Email</label><br></br>
        <input onChange={(event)=>{
          setEmailState(event.target.value)
        }} type="email" class="form-control" id="email" value={EmailState} />
      </div><br></br>
      <div class="form-group">
        <label for="address">Address</label><br></br>
        <input onChange={(event)=>{
          setAddressState(event.target.value)
        }} type="text" class="form-control" id="address" value={AddressState} />
      </div><br></br>
      <div class="form-group">
        <label for="age">Age</label><br></br>
        <input onChange={(event)=>{
          setAgeState(event.target.value)
        }} type="number" class="form-control" id="age" value={AgeState} />
      </div><br></br>
      <div class="form-group">
        <label for="username">Set Username</label><br></br>
        <input onChange={(event)=>{
          setUsernameState(event.target.value)
        }} type="text" class="form-control" id="username" value={UsernameState} />
      </div><br></br>

      <div class="form-group">
        <label for="password">Set Password</label>
        <input onChange={(event)=>{
          setPasswordState(event.target.value)
        }} type="text" class="form-control" id="password" value={PasswordState} />
      </div>

      <div>
        <button id="register-btn" onClick={submit}>Register</button>
        <button id="clear-btn" onClick={clear}>Clear</button>
      </div>
      
    
    </form>  
      </div>
      
    )
}

export default AdminRegisterUser;