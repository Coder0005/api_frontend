
import {useState, useEffect} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import React from "react";
import axios from 'axios';

import './userGigs.css'
import UpdateGig from '../updateGig/updateGig';

import { useNavigate } from "react-router-dom";



const UserGigs = ()=>{
    var [userGigState, setUserGigState] = useState([]);
    const userID = "62c91498ec6eb80557a4b73e";


    const nav = useNavigate();


    useEffect(() => {
        fetchData();
        
      }, [])
      const fetchData = async () => {
        await axios.post("http://localhost:90/gig/userGig", {
          "id" : "62c91498ec6eb80557a4b73e"
        }).then((res) =>{   
          setUserGigState(res.data) 
        })
      }
      const updateGig = (Gig_id)=>{
        nav('/updateGig', { state: { id: Gig_id } });
      }

      const deleteGig = async (Gig_id)=>{
        await axios.delete(`http://localhost:90/gig/deleteReactGig/${Gig_id}`, {
          "id" : "62c91498ec6eb80557a4b73e"
        }).then((res) =>{   

          if (res.data === 1){
            alert("Gig deleted")
            fetchData()
          }
          else{
            alert("unable to delete gig")
          }
        })
      }

      const addGig = ()=>{
        nav("/addGig")
      }
  

      var gigCount = 0;

    return (
        <div>

        <h2>These are your gigs 

        <button onClick={()=>{
                        addGig()
                      }} class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 mx-2 rounded" id='delete-btn'>
                         Add
                      </button>
        </h2>
        {userGigState.length <= 0 ?  <Spinner animation="border" role="status"></Spinner> : userGigState.map((gig)=>{
                    var imageSrc = `https://res.cloudinary.com/dr27vplim/image/upload/v1658865564/${gig.image}`+'.png'
                    gigCount++
                    return (gigCount % 2 === 0) ? <div class="max-w-sm rounded overflow-hidden shadow-lg" id='gig-1' key={gig._id}>
                    <img src={`${imageSrc}`} style={{width:"400px", height:"400px"}} />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">{gig.title}</div>
                      <hr></hr>
                      <h2>Category : {gig.category}</h2>
                      
                      <hr></hr>
                      <h2>Technique : {gig.technique}</h2>
                      <p class="text-gray-700 text-base">
                        "{gig.description}"
                        
                      </p>
                      <hr></hr>
                      <h2>Rs.{gig.rate}</h2>
                      <hr></hr>
                 
                      <button onClick={()=>{updateGig(gig._id)} } class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 mx-2 rounded" id='update-btn'>
                         Update
                      </button>

                      <button onClick={()=>{
                        deleteGig(gig._id)
                      }} class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 mx-2 rounded" id='delete-btn'>
                         Delete
                      </button>
                        
                      
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{gig.category}</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{gig.category}</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{gig.category}</span>
                    </div>
                  </div> : 
                    <div class="max-w-sm rounded overflow-hidden shadow-lg" id='gig-2' key={gig._id}>
                    <img src={`${imageSrc}`} style={{width:"400px", height:"400px"}} />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">{gig.title}</div>
                      <hr></hr>
                      <h2>Category : {gig.category}</h2>
                      <hr></hr>
                      <h2>Technique : {gig.technique}</h2>
                      <p class="text-gray-700 text-base">
                        "
                        {gig.description}
                        "
                      </p>
                      <hr></hr>
                      <h2>Rs.{gig.rate}</h2>
                      <hr></hr>
                 
                      <button onClick={()=>{updateGig(gig._id)} } class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 mx-2 rounded" id='update-btn'>
                         Update
                      </button>

                      <button onClick={()=>{
                        deleteGig(gig._id)
                      }} class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 mx-2 rounded" id='delete-btn'>
                         Delete
                      </button>
                        
                      
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{gig.category}</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{gig.category}</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{gig.category}</span>
                    </div>
                  </div>
                    
                })}



        </div>
        
    )
}

export default UserGigs;