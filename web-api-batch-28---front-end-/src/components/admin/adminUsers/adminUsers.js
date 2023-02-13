import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import './adminUsers.css';
import Register from '../../register/Register';
import AdminRegisterUser from './adminRegisterUser/adminRegisterUser';

const AdminUsers = ()=> {
    var [userState, setUserState] = useState([])
    var [showAddUserForm, setShowUserForm] = useState(false)

    const fetchData = ()=>{
        
        axios.get('http://localhost:90/users/getUsers')
        .then( res => {
            setUserState(res.data)
        })
    }

    useEffect(()=>{
        fetchData()
    }, [])

    var userCount = 0;

    const deleteUser = async (user_id)=>{
        await axios.delete(`http://localhost:90/users/deleteUser/${user_id}`).then((res) =>{   

          if (res.data === 1){
            fetchData()
          }
          else{
            alert("unable to delete User")
          }
        })
      }

      const addUser = ()=> {
        setShowUserForm(true)
      }
    return (
        <div>
            <Alert variant="warning">
            <h2>These are our registered users! <Button onClick={addUser}
          variant="success" id="notification-delete-btn">Add</Button></h2>
        </Alert>
            {showAddUserForm ? <AdminRegisterUser /> : 
            
            <div>

{userState.map((user)=>{
              userCount++;
                return (

        <Card id="userCard" bg={userCount % 2 == 0 ? 'success' : 'info'}>
            <br></br>
      Username : {user.username} 
      <Card.Body>
        <Card.Title><img src='https://www.rwest.com/wp-content/themes/rwest-site-theme/library/img/default-person.png' /></Card.Title>
        <Card.Text>
        <br></br>
          {user.firstName} {user.lastName}
        </Card.Text>
        <Card.Text>
          {user.email}
          <br></br>
        </Card.Text>
        <Card.Text>
          Address : {user.address}
          <br></br>
        </Card.Text>
        <Card.Text>
        <br></br>
          {user.age}years old
        </Card.Text>
        <Card.Text>
        <Button onClick={()=>{
            deleteUser(user._id)
        }}
        variant="danger">Delete</Button>
        </Card.Text>
      </Card.Body>
    </Card>                  
                    
)
})}

            </div>
            
            }



        </div>
        
    )
}

export default AdminUsers;