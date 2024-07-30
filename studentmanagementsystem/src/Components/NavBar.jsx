import React from 'react'
import Logo from '../Asset/logo.png'
import { Link,Routes,Route } from 'react-router-dom'
import AddUser from './Pages/AddUser'
import ShowUser from './Pages/ShowUser'
const NavBar = () => {
  return (
    <div>
        <nav>
            <img src={Logo} alt="Image" />
            <ul>
                <li>
                    <Link to="/Admission" className='Active'>Admission</Link>
                </li>
                <li>
                    <Link to="/Fetch" className='Active'>Show</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/Admission" element={<AddUser/>}/>
            <Route path="/Fetch" element={<ShowUser/>}/>
        </Routes>
    </div>
  )
}

export default NavBar
