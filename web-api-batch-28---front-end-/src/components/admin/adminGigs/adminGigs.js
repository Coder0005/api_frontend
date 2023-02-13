import { render } from '@testing-library/react'
import './adminGigs.css'

import axios from 'axios'

import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


import Spinner from 'react-bootstrap/Spinner';

import Form from 'react-bootstrap/Form';

import { useLocation  } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const AdminGigs = ()=>{
    
    var [gigs, setGigs]= useState([])
    var [showAddGig, setShowAddGig] = useState(false)
    var [showUpdateGig, setShowUpdateGig] = useState(false)
    var [toUpdateGigID, setToUpdateGigID] = useState("")

    const nav = useNavigate();
    
    const fetchData = ()=>{
        axios.get('http://localhost:90/gig/showGig')
        .then( res => {
            setGigs(res.data)
        })
    }

    useEffect(()=>{
        fetchData()
    }, [])
   
    var gigCount = 0;

    const deleteGig = async (Gig_id)=>{
        await axios.delete(`http://localhost:90/gig/deleteReactGig/${Gig_id}`, {
          "id" : "62c91498ec6eb80557a4b73e"
        }).then((res) =>{   

          if (res.data === 1){
            fetchData()
          }
          else{
            alert("unable to delete gig")
          }
        })
      }

      const update = (Gig_id)=> {
        setShowAddGig(false);

        nav('/updateGig', { state: { id: Gig_id } });
        
      }
      const add = ()=>{
        setShowUpdateGig(false)
        setShowAddGig(true)
        
      }

    return (
        <div id='gigBody'>
           
           <Alert variant="warning">
           <h2 >These are all the gigs! <Button  onClick={add}
          variant="success" id="notification-delete-btn">Add</Button></h2>
        </Alert>
        {showUpdateGig ? <UpdateGig /> : ""}
           {showAddGig ? <AddGig /> : ""}
           
           {gigs.map((gig)=>{
              var imageSrc = `https://res.cloudinary.com/dr27vplim/image/upload/v1658865564/${gig.image}`+'.png'
              gigCount++;
                return (

<Card id="gigCard" bg={(gig.category == "I.T & Tech") ? "success" : ((gig.category == "Legal Works") ? "primary" : ((gig.category == "Art & Music" ? "danger" : ((gig.category == "Graphics & Multimedia" ? "info" : "secondary")))))}>
      <Card.Header>Freelancer Name : {gig.freelancerName} </Card.Header>
      
      <Card.Body>
        <Card.Title><img src={`${imageSrc}`} style={{width:"300px", height:"300px"}} /></Card.Title>
        <Card.Text>
        <br></br>
          {gig.title}
          <br></br>
        </Card.Text>
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
          update(gig._id)
        }} variant="warning">Update</Button>{' '}
        <Button onClick={()=>{
            deleteGig(gig._id)
        }} variant="danger">Delete</Button>
        </Card.Text> 
      </Card.Body>
    </Card>                  
                    
)
})}
        </div>
    )
}

const AddGig = ()=> {

    var [titleState, setTitleState] = useState("")
    var [categoryState, setCategoryState] = useState("")
    var [techniqueState, setTechniqueState] = useState("")
    var [rateState, setRateState] = useState("")
    var [descriptionState, setDescriptionState] = useState("")

    const nav = useNavigate();

      
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


    // const loadImages = async ()=> {
    
    //     const res = await axios.get('http://localhost:90/gig/getImages');
    //     const data = await res.json()

    //     setImageIds(data)
    // }

    // useEffect(()=>{
    //     loadImages()
    // }, [])

    

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
      alert(base64EncodedImage)
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
        <div>
                <h2>This is the Add Gig form.</h2>
    
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

      <Button onClick={uploadImage} variant="success" type="submit" style={{width: "150px"}}>
        Add
      </Button> {' '}

      <Button onClick={()=>{clear()}} variant="danger" style={{width: "150px"}} >
        Clear
      </Button>
      </form>
            
        </div>
    )
}


const UpdateGig = (props)=> {
    const { state } = useLocation();
    const id = AdminGigs.toUpdateGigID

    var [userGigState, setUserGigState] = useState([])

    var [titleState, setTitleState] = useState("")
    var [categoryState, setCategoryState] = useState("")
    var [techniqueState, setTechniqueState] = useState("")
    var [rateState, setRateState] = useState("")
    var [descriptionState, setDescriptionState] = useState("")

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
        <div>
                <h2>Update Where Necessary</h2>

    <Form>
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


export default AdminGigs;