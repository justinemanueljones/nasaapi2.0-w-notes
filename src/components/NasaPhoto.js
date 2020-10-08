import React from 'react'
import {useState, useEffect} from 'react'
import NavBar from './NavBar'


const apiKey= process.env.REACT_APP_NASA_KEY    //

export default function NasaPhoto () {
    const [photoData, setPhotData] =useState(null); //set state and set sate to null

useEffect(() =>{   
    // create a function to fetch photo with usEffect like component/did/mount
fetchPhoto() //

    async function fetchPhoto() {
const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    const data = await res.json(); //pulls all out data
    setPhotData(data);  //data is sent to the response.json version of it
    // console.log(data); //we can view our api data and see what we can diaplay or use postman etc
    // set photo data to whatever photo data were pulling out
    // but we need to call fetchPhoto to to fetch api and run ot 
}
},[]);   //makes sure were only running once with empty array

if (!photoData) return <div />;  //if we dont get any info or api 
                                // is broken we get this div and someting returned 


    return (
        <>
        <NavBar />      {/* using Nav Bar Component */}
<div className="nasa-photo">
<img src = {photoData.url} alt = {photoData.title} className="photo"/>
<div>
<h1>{photoData.title}</h1>   {/* //no need to hard code title title changes daily */}
<p className="date">{photoData.date}</p>
<p className="explanation">{photoData.explanation}</p>
</div>
</div>
</>
     );
    }