import React from "react";
import './freelancersMessage.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const FreelancersMessage = (props)=>{
    return (
        <Card id="freelancerMessageCard" bg={props.variant}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        
          
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Message</Accordion.Header>
        <Accordion.Body>

          {props.message}

        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    <hr></hr>
        
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>
    )
}

export default FreelancersMessage