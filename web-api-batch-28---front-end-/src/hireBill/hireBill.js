import Card from 'react-bootstrap/Card';
import axios from 'axios'

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from 'react'

import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';


const HireBill = (props)=> {
    const gigID = props.gigID
    var [gig, setGig] = useState([]);

    const userID = '62c91498ec6eb80557a4b73e'

    const connect = ()=>{
        axios.post('http://localhost:90/gig/getGig', {
            "id" : gigID
        })
        .then( res => {
            setGig(res.data)
        })
    }

    useEffect(()=>{
        connect()
    }, [])
    const [show, setShow] = useState(false);

    const confirm =async ()=> {
        await axios.put(`http://localhost:90/users/addHire/62dfb4c17c833cff5b8f9ba8`, {
        "hires" : gigID,
      }).then((res) =>{
        if (res.data == 1){
            alert(
                'hired'
            )
        }
        else {
            alert("fired")
        }
      })

      setShow(true)
      }
    return (
        <div>
            <Col xs={6} style={{marginLeft : "40%"}}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide position={"middle-center"}>
            <Toast.Header>   
              <strong className="me-auto">Congratulations!</strong>
              <small>A few seconds ago</small>
            </Toast.Header>
            <Toast.Body>Hire Successful</Toast.Body>
          </Toast>
        </Col>
            <Card
          bg='info'
          text="my Text"
            style={{width : "1000px", overflow : 'hidden'}}
          className="mb-2"
        >
          <Card.Header><h1>Presenting Bill</h1></Card.Header>
          <Card.Body>
            <Card.Title><img src='https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg' /></Card.Title>
            <Card.Title>{gig.title}</Card.Title>
            <Card.Text>
              Category : {gig.category}
            </Card.Text>
            <Card.Text>
            Technique : {gig.technique}
            </Card.Text>
            <Card.Text>
            Description : {gig.description}
            </Card.Text>
            <Card.Text>
            Your Total (Rs) : {gig.rate}
            </Card.Text>
            <Card.Text>
                <Alert variant="warning">
                <Button onClick={confirm}
        variant="dark">Confirm</Button>
                </Alert>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    )
}

export default HireBill;
