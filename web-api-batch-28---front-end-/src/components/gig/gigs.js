import { render } from '@testing-library/react'
import './gig.css'

import axios from 'axios'

import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";
import HireBill from '../../hireBill/hireBill';

const api = axios.create({
    baseURL : 'http://localhost:90/gig/trial'
}   
)


const Gigs = ()=>{
    
    var [gigs, setGigs]= useState([])
    var [showBill, setShowBill] = useState(false)
    var [gigID, setGigID] = useState("")
    var [imgSrc, setImgSrc] = useState('')

    const nav = useNavigate();
    const connect = ()=>{
        axios.get('http://localhost:90/gig/showGig')
        .then( res => {
            setGigs(res.data)
        })
    }

    useEffect(()=>{
        connect()
    }, [])

    const hire = (gigID)=> {
      setShowBill(true)
      setGigID(gigID)
      // nav('hireBill')
    }
   
    var gigCount = 0;
    return (
      <div>
          {showBill ? 
          <HireBill gigID = {gigID}/>
          : 
          <div id='gigBody'>
           
           <Alert variant="warning">
           <h2 >We currently have these gigs!</h2>
        </Alert>
           
           {gigs.map((gig)=>{
              gigCount++;
               var imageSrc = `https://res.cloudinary.com/dr27vplim/image/upload/v1658865564/${gig.image}`+'.png'
         
                return (

<Card id="gigCard" bg={(gig.category == "I.T & Tech") ? "success" : ((gig.category == "Legal Works") ? "primary" : ((gig.category == "Art & Music" ? "danger" : ((gig.category == "Graphics & Multimedia" ? "info" : "secondary")))))}>
<img src={`${imageSrc}`} style={{width:"320px", height:"300px"}} />
<Card.Title>Freelancer Name :{gig.freelancerName}</Card.Title>
      <Card.Header>{gig.title} </Card.Header>
      <Card.Body>
       
        <Card.Text>
        <br></br>
          {gig.category}
          <br></br>
        </Card.Text>
        <Card.Title>Technique : {gig.technique}</Card.Title>
        <Card.Text>
        <br></br>
          {gig.description}
          <br></br>
        </Card.Text>
        <Card.Text>
        <br></br>
          Rs.{gig.rate}
          <br></br>
        </Card.Text>
        <Card.Text>
        <br></br>
        <Button onClick={()=>{
          hire(gig._id)
        }}
        variant="dark">Hire</Button>
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
Gigs.defaultProps ={
    title : "No title", 
    subTitle : " No subtitle",
    description : "No description",
    price : "Rs. 0",
    items : 1
}

export default Gigs;