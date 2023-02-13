import React from "react";
import './clientsMessage.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ClientsMessage = (props)=>{
    return (
        <Card id="clientMessageCard" bg={props.variant}>
      <Card.Header><img src={props.image} /></Card.Header>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        "  
        <br></br>
          {props.message}
          <br></br>
          "
        </Card.Text>
        
      </Card.Body>
    </Card>
    )
}

export default ClientsMessage;

