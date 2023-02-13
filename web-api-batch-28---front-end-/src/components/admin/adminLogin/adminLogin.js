import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './adminLogin.css'
import Alert from 'react-bootstrap/Alert';
import React , {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const AdminLogin = ()=> {

    var [userNameState, setUserNameState] = useState([])
    var [passwordState, setPasswordState] = useState([])

    var [adminIdState, setAdminIdState] = useState([])

    const nav = useNavigate();

    const [show, setShow] = useState(false);

    const authentication = async ()=> {
      await axios.post("http://localhost:90/admin/login", {
        username : userNameState,
        password : passwordState 
      }).then((res) =>{
           if (res.data.foundResponse === "1"){
            setAdminIdState(res.data.adminID)
            nav("/admin/home");
           }
           else {
            setShow(true)
           }
        })
    }

    return (
        <div id='admin-login-container'>

<Alert  variant="warning">
          You will have to login as an admin to make changes to the application!
        </Alert>

        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide position={"middle-center"}>
            <Toast.Header>
              
              <strong className="me-auto">Whoops :(</strong>
              <small>A few seconds ago</small>
            </Toast.Header>
            <Toast.Body>Invalid Credentials!</Toast.Body>
          </Toast>
        </Col>

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><Alert  variant="warning">
          Username
        </Alert></Form.Label>
        <Form.Control placeholder="Username" onChange={(event)=>{
                setUserNameState(event.target.value)
              }} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><Alert  variant="warning">
          Password
        </Alert></Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event)=>{
                setPasswordState(event.target.value)
              }} />
      </Form.Group>

      <Button variant="primary" onClick={authentication}>
        Login
      </Button>
    </Form>

        </div>
        
    )
}

export default AdminLogin;