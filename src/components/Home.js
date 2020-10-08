import React from 'react'
import { Link } from 'react-router-dom'    
// Link can be used beacuse we assigned home
// Route is used for assigning

export default function Home() { 
  return(
<div className="home">
<Link className="home-link" to="/nasaphoto">Nasa Photo Of The Day emoji </Link> 
</div>
    )    
}
 