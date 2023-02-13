
import axios from 'axios';
import React , {useState} from 'react';
import './login.css'
import { useNavigate } from "react-router-dom";
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Navbar from '../navbar/Navbar';

const Login = ()=>{
    var [UsernameState, setUsernameState] = useState();
    var [PasswordState, setPasswordState] = useState();
    const [userIDState, setUserIdState] = useState();
    var [loggedInState, setLoggedInState] = useState(false);
    

    const [show, setShow] = useState(false);

    const nav = useNavigate();
   
    const clear =  ()=>{
        setUsernameState("");
        setPasswordState("");
    }
    
    const login =async ()=>{
      await axios.post("http://localhost:90/users/login", {
        username : UsernameState,
        password : PasswordState 
      }).then((res) =>{
          
           if (res.data.foundResponse === "1"){
            setUserIdState(res.data.userID)
            setUsernameState(res.data.username)
            alert(res.data.username)
            setShow(true)
            setLoggedInState(true);
            <Navbar loggedIn={true} />
            // nav("/");
           }
           else {
            alert("Couldn't login user!")
           }
        })
    }
    const register = ()=> {
      nav("/register")
    }
    return (
      <div id='login-container'>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide position={"middle-center"}>
            <Toast.Header>   
              <strong className="me-auto">Congratulations!</strong>
              <small>A few seconds ago</small>
            </Toast.Header>
            <Toast.Body>Login Successful</Toast.Body>
          </Toast>
        </Col>  
            <br></br>
            <div class="form-group">
            <Alert variant="warning">
            <h2>Username</h2>
        </Alert>
              <input value={UsernameState} onChange={(event)=>{
                setUsernameState(event.target.value)
              }} type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter username"/>
            </div>
            <br></br>
            <div class="form-group">
            <Alert variant="warning">
            <h2>Password</h2>
        </Alert>
              <input value={PasswordState}  onChange={(event)=>{
                setPasswordState(event.target.value)
              }} type="password" class="form-control" id="password" placeholder="Password"/>
            </div>
            <br></br>
            <Button onClick={login} id='login-btn' variant="success">Login</Button>
            <Button onClick={clear} id='clear-btn' variant="danger">Clear</Button>

            <Button onClick={register} id='register-btn' variant="danger">Register Now!</Button>

      </div>
       
    )
}

export default Login ;