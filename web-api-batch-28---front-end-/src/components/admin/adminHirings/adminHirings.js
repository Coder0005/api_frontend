
import React, {useState, useEffect} from "react";
import axios from 'axios';

// import Image from 'cloudinary-react'






const Upload = () => {
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
   
        try{  
            // await fetch('http://localhost:90/gig/uploadFile', {
            //     method : 'POST',
            //     body : JSON.stringify({data : base64EncodedImage}),
            //     headers : {'Content-type' : 'application/json'}
            // })
            alert(base64EncodedImage)
            await axios.post(`http://localhost:90/gig/uploadFile`, {
        "data" : base64EncodedImage,
      }).then((res) =>{
        if (res.data == 1){
            alert("success")
        }
    
      })
        }
        catch (error){
            console.log(error)
        }
    }
    return (
        <div>
        <h1>Upload</h1>
        <form onSubmit={handleSubmitFile}>
            <input 
            type='file' 
            name='image' 
            onChange={handleFileInputChange} 
            value={fileInputState} 
            className='form-input' 
            />
            <button className="btn" type="submit">Submit</button>
        </form>
        {previewSource && (
            <img src={previewSource} alt="chosen" />
        )}

        {/* {imageIds.length = 0 ? <h2>No Image Received</h2> : <div>
                {imageIds.map((imageID, index)=> {
                    // <Image key={index} cloudName="Aryan Pokharel" publicID={imageID} width="300" crop="scale" />
                    // <li key={index}>{imageID}</li>
                })}
            </div>} */}
    </div>
    )
    
}

export default Upload;


