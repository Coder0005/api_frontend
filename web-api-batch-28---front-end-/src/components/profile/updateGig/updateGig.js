
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './updateGig.css'
import Alert from 'react-bootstrap/Alert';

const UpdateGig = ()=> {
    const { state } = useLocation();
    const { id } = state;

    var [userGigState, setUserGigState] = useState([])

    var [titleState, setTitleState] = useState("")
    var [categoryState, setCategoryState] = useState("")
    var [techniqueState, setTechniqueState] = useState("")
    var [rateState, setRateState] = useState("")
    var [descriptionState, setDescriptionState] = useState("")
    var [imageSrc, setImageSrc] = useState("")

    const nav = useNavigate();

    useEffect(() => {
        fetchData();
        
      }, [])

      const fetchData = async () => {
        await axios.post("http://localhost:90/gig/updateGig", {
          "id" : id
        }).then((res) =>{   
          setUserGigState(res.data) 
          setTitleState(res.data.title);
          setCategoryState(res.data.category)
          setTechniqueState(res.data.technique)
          setRateState(res.data.rate)
          setDescriptionState(res.data.description)
      
          setImageSrc(`https://res.cloudinary.com/dr27vplim/image/upload/v1658865564/${res.data.image}`+'.png')
        })
      }

      const update =async ()=> {
        await axios.put(`http://localhost:90/gig/updateGig/${id}`, {
        "title" : titleState,
        "technique" : techniqueState,
        "category" : categoryState,
        "rate" : rateState,
        "description" : descriptionState
      }).then((res) =>{
        if (res.data == 1){
            navigator("/userGigs")
        }
        else {
            alert("unable to update")
        }
      })
      }

      const clear = ()=>{
        setUserGigState("")
        setTitleState("")
        setCategoryState("")
        setTechniqueState("")
        setRateState("")
        setDescriptionState("")
      }

    return (
        <div id='updateGig'>
                
                <Alert variant="warning">
                <h2>Update Where Necessary</h2>
        </Alert>

    <Form>
      <input type='file' />
      <img src={imageSrc}  style={{width:"300px", height:"300px"}}/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={titleState} onChange={(e)=>{setTitleState(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <div class="form-group">
    <label for="exampleFormControlSelect1">Category</label>
    <select class="form-control" id="exampleFormControlSelect1"  value={categoryState} onChange={(e)=>{setCategoryState(e.target.value)}}>

      <option>I.T & Tech</option>
      <option>Art & Music</option>
      <option>Legal Works</option>
      <option>Graphics & Multimedia</option>
      <option>miscellaneous</option>
    </select>
  </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Technique</Form.Label>
        <Form.Control type="text" value={techniqueState} onChange={(e)=>{setTechniqueState(e.target.value)}}/>
    
      </Form.Group>


     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <Form.Control type="text" value={rateState} onChange={(e)=>{setRateState(e.target.value)}}/>
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={descriptionState} onChange={(e)=>{setDescriptionState(e.target.value)}}/>
    
      </Form.Group>

      <Button onClick={update} variant="success" type="submit">
        Update
      </Button>

      <Button onClick={clear} variant="danger" >
        Clear
      </Button>
    </Form>
            
        </div>
    )
}

export default UpdateGig;


