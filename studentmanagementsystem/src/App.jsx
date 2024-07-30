import React from 'react'
import NavBar from './Components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import ins from "./Asset/intragram.png"
import yout from "./Asset/YouTube.png"
import linked from "./Asset/linkedin.png"
import twitter from "./Asset/twitter.png"
const App = () => {
  return (
    <div>
        <header>
          <BrowserRouter>
           <NavBar/>
          </BrowserRouter>
        </header>
       <footer>
        <h1>&#169;<span>Eduford</span></h1>
        <div className="row">
         <div className="column">
          <img src={ins} alt="" />
          <a href="">Edu@Ford.in</a>
         </div>
         <div className="column">
          <img src={yout} alt="" />
          <a href="">EduFord.Channel</a>
         </div>
         <div className="column">
          <img src={twitter} alt="" />
          <a href="">Edu@Ford.in</a>
         </div>
         <div className="column">
          <img src={linked} alt="" />
          <a href="">Edu@Ford.in</a>
         </div>
        </div>
        </footer>
    </div>
  )
}

export default App
