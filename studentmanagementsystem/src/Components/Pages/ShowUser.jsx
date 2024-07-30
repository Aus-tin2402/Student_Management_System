import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Show.css"
const ShowUser = () => {
    const [data,setData]=useState()
    const [user,SetUser]=useState([]);
    useEffect((e)=>{
      fetch('http://localhost:8080/GetAll')
      .then((res)=>res.json())
      .then((result)=>{
          SetUser(result)
      })
    },[])
  return (
   <main>
    <marquee behavior="sroll" direction="">Welcome to fech page</marquee>
    <form>
      <div>
        <label htmlFor="">Acknowledge Or Mobile Number</label>
        <input 
        type={'text'}
        placeholder='type here' 
        name='data'
        value={data}
        required
        onChange={(e)=>setData(e.target.value)}
        />
      </div>
    </form>
        <table border={2} >
          <thead>
            <tr>
              <th>APPNO</th>
              <th>NAME</th>
              <th>MOBILE</th>
              <th>DOB</th>
              <th>AGE</th>
              <th>ADDRESS</th>
              <th>DISTRICK</th>
              <th>TALUK</th>
              <th>VILLAGE</th>
              <th>ENGLISH</th>
              <th>TAMIL</th>
              <th>MATHS</th>
              <th>SCIENCE</th>
              <th>SOCIAL</th>
              <th>TOTAL</th>
              <th>AVERAGE</th>
            </tr>
          </thead>
          <tbody>{
          user.map(user=>{
        if(user.mobile==data||user.appno==data){
        return(
            <tr>
              <td>{user.appno}</td>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.dob}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
              <td>{user.districk}</td>
              <td>{user.taluk}</td>
              <td>{user.village}</td>
              <td>{user.english}</td>
              <td>{user.tamil}</td>
              <td>{user.maths}</td>
              <td>{user.science}</td>
              <td>{user.social}</td>
              <td>{user.total}</td>
              <td>{user.avgerage}</td>
            </tr>
            ) }
          })
        }
          </tbody>
        </table>
   </main>
  )
}

export default ShowUser


