
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './addGig.css'


const AddGig = ()=> {

    var [titleState, setTitleState] = useState("")
    var [categoryState, setCategoryState] = useState("")
    var [techniqueState, setTechniqueState] = useState("")
    var [rateState, setRateState] = useState("")
    var [descriptionState, setDescriptionState] = useState("")
    var [imageState, setImageState] = useState("")

    const nav = useNavigate();

      const addGig =async ()=> {
        await axios.post(`http://localhost:90/gig/addGig`, {
        "title" : titleState,
        "technique" : techniqueState,
        "category" : categoryState,
        "rate" : rateState,
        "description" : descriptionState,
        "id" : "62c943ff8b9d7ce267dd4399",
        "image" : imageState
      }).then((res) =>{
        if (res.data == 1){
            alert("gig added")
            // navigator("/userGigs")
        }
        else {
            alert("unable to add")
        }
      })
      }

      const clear = ()=>{
        setTitleState("")
        setCategoryState("")
        setTechniqueState("")
        setRateState("")
        setDescriptionState("")
        setPreviewSource("")
      }
      const [fileInputState, setFileInputState] = useState('')
      const [selectedFile, setSelectedFile] = useState('')
      const [previewSource, setPreviewSource] = useState()
      const[imageIds, setImageIds] = useState()
    

    const handleFileInputChange = (e)=> {
        const file = e.target.files[0];
        previewFile(file);  

    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=> {
            setPreviewSource(reader.result);

        }
    }
    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!previewSource) return ;
        uploadImage(previewSource)
    }
    const uploadImage = async (base64EncodedImage)=> {
      await axios.post(`http://localhost:90/gig/addGig`, {
        "title" : titleState,
        "technique" : techniqueState,
        "category" : categoryState,
        "rate" : rateState,
        "description" : descriptionState,
        "id" : "62c91498ec6eb80557a4b73e",
        "image" : base64EncodedImage,
       
      }).then((res) =>{
        if (res.data == 1){
            alert("gig added")
        }
        else {
            alert("unable to add")
        }
      })
      } 

    return (
        <div id='addGigDiv'>
                <Alert variant="warning">
           <h2 >Please Provide The Gig Info!</h2>
        </Alert>
    
    <form onSubmit={handleSubmitFile}>
            <input 
            type='file' 
            name='image' 
            onChange={handleFileInputChange} 
            value={fileInputState} 
            className='form-input' 
            />
        <div>
        {previewSource && (
            <img src={previewSource} alt="chosen" style={{width:"300px", height:"300px"}}/>
        )}
        </div>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" onChange={(e)=>{setTitleState(e.target.value)}}/>
    
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
        <Form.Control type="text" onChange={(e)=>{setTechniqueState(e.target.value)}}/>
    
      </Form.Group>


     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <Form.Control type="text"onChange={(e)=>{setRateState(e.target.value)}}/>
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" onChange={(e)=>{setDescriptionState(e.target.value)}}/>
    
      </Form.Group>

      <Button onClick={uploadImage} variant="success" type="submit">
        Add
      </Button>{' '}

      <Button onClick={()=>{clear()}} variant="danger" >
        Clear
      </Button>
      </form>
            
        </div>
    )
}

export default AddGig;


