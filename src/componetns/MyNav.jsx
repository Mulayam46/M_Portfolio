import React from 'react'
import "../styles/mynav.css"
const MyNav = () => {
  return (
    <div id='nav'>
        <div className="container ">
            <div className="row  d-flex align-items-center">
                <div className="col-md-5">
                    <div><h3>Mulayam</h3></div>
                </div>
                <div className="col-md-7 ">
                    <div className='menu'>
                       <div className='menu-list'>
                       <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About Us</a></li>  
                            <li><a href="">Skills</a></li>
                            <li><a href="">Education</a></li>
                            <li><a href="">Project</a></li>
                       </ul>   
                       </div> 
                    <div ><a href="">< button className='contact'>Contact</button></a></div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default MyNav