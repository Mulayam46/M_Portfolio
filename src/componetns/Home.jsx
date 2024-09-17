import React from 'react'
import "../styles/home.css"
const Home = () => {
  return (
    <div id='home'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1>Hello! I Am</h1>
              <h1>Frontend Developer</h1>
            </div>
            <div><button className='hire-me'>Hire Me</button></div>
            <div>
              <p>github</p>
              <p>linkedln</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/Assets/mulayam.jpg" alt="" style={{height:"88vh" , width:"100%"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home