import React from "react";
import './boardTeam.css'
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';


const BoardTeam = (props)=> {
    
    const name = props.name;
    const post = props.post;
    const description = props.description;
    const email = props.email;
    const contact = props.contact
    const image = props.image

    return (
 
  <Card className="bg-dark text-white">
    <br></br>
    <br></br>
    <br></br><br></br>
      <Card.Img src={image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{name}</Card.Title>
        <h3>{post}</h3>
        <hr></hr>
        <h3>{email}</h3>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text><a href={contact}><Button variant="dark">Contact</Button></a></Card.Text>
      </Card.ImgOverlay>
    </Card>
    )
}

export default BoardTeam;