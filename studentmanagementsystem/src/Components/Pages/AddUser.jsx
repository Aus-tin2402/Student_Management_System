import React, { useState } from 'react'
import "./adduser.css"
const AddUser = () => {
  const [appno,setAppno]=useState(``)
  const [name,setName]=useState('')
  const [mobile,setMobile]=useState()
  const [dob,setDob]=useState()
  const [age,setAge]=useState()
  const [address,setAddress]=useState(``)
  const [districk,setDistrick]=useState()
  const [taluk,setTaluk]=useState()
  const [village,setVillage]=useState()
  const [english,setEnglish]=useState()
  const [tamil,setTamil]=useState()
  const [maths,setMaths]=useState()
  const [science,setScience]=useState()
  const [social,setSocial]=useState()
  const [total,setTotal]=useState()
  const [avgerage,setAvgerage]=useState()
  const [states,setStates]=useState([])
  const [cities,setCities]=useState([])
  const countries=[
    {
      name:'Chennai',
      states:[
        {
          name:'Guindy',
          cities:['Ekkatuthangal','Alandur']
        },
        {
          name:'Velacheri',
          cities:['Taramani','PalliPattu']
        }
      ]
    },
    {
      name:'Cuddalore',
      states:[
        {
          name:'Chidambaram',
          cities:['Villiyanalur','Varagur']
        },
        {
          name:'KattuManarKoil',
          cities:['SriPuthur','Thirunaraiyar']
        }
      ]
    }
  ]
  

  let changeCountry=(e)=>{
    setDistrick(e.target.value)
    setStates(countries.find(ctr =>ctr.name===e.target.value).states)
  }
  let changeTaluk=(e)=>{
    setTaluk(e.target.value)
    setCities(states.find(state =>state.name === e.target.value).cities)
  }
  let changeVillage=(e)=>{
    setVillage(e.target.value)
  }
  
  let dateChange=e=>{
    let val =e.target.value;
    setDob(val);
    let num=val.split("").splice(0,4).join("");
    let todayDate = new Date();
    let currentYear=todayDate.getFullYear()
    setAge(currentYear-Number(num))
  }
    let AddMark=(e)=>{
      let num=Number(english)+Number(tamil)+Number(maths)+Number(science)+Number(social)
      console.log(num);
      setTotal(num);
      setAvgerage(num/5)
    }
    let Random=(e)=>{
      let ch=name.split("");
      let random=Math.floor(Math.random()*9999)
      let res='';
      for(let i=0;i<5;i++){
          res+=ch[i];
      }
      let ans=res+random
      setAppno(ans)
    }
    let Submit=(e)=>{
      let user={
        appno,name,mobile,dob,age,address,districk,taluk,village,english,tamil,maths,science,social,total,avgerage
      }
      fetch('http://localhost:8080/AddUser',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(user)
      }).then(()=>{
        console.log("Sucessfully");
      })
      // console.log(user.appno+' '+user.name+user.mobile+' '+user.dob+' '+user.age+' '+user.address+' '+user.districk+' '+user.taluk+' '+user.village+' '+user.english+' '+user.tamil+' '+user.maths+' '+user.science+' '+user.social+' '+user.total+' '+user.avgerage);
      window.alert(`Data Saved Sucessfully \n Your Acknowledge Number ${appno}`);
    }
  return (
    <>
    <marquee behavior="" direction="">welcome to admisssion page @2024-2025</marquee>
    <aside>
      <form onSubmit={(e)=>Submit(e)}>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='enter name'
            name="name"
            value={name}
            onChange={e=>setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Mobile</label>
            <input type={'tel'} placeholder='enter phone'
            name='mobile'
            value={mobile}
            onChange={e=>setMobile(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="">DOB</label>
            <input type="date"
            name='dob'
            value={dob}
            onChange={(e)=>dateChange(e)}
            />
        </div>
        <div>
            <label htmlFor="">Age</label>
            <input type="number" placeholder='enter Age' value={age}
            onChange={e=>{return}}
            readOnly
            />
        </div>
        <div>
            <label htmlFor="">Address</label>
           <textarea name="address" id="" cols="30" rows="10"
           value={address}
           onChange={e=>setAddress(e.target.value)}
           />
        </div>
        <div>
            <label htmlFor="">District</label>
            <select name="district" id="" value={districk} onChange={(e)=>changeCountry(e)}>
                <option value="">--select district</option>
                {
                  countries.map((ctr,i)=>(
                    <>
                    <option value={ctr.name} key={i}>{ctr.name}</option>
                    </>
                  ))
                }
            </select>
        </div>
        <div>
          <label htmlFor="">Taluk</label>
            <select name="taluk" id="" onChange={(e)=>changeTaluk(e)}>
               <option value="">--select Taluk--</option>
                {
                  states.map((state,i)=>(
                    <>
                    <option value={state.name} key={i}>{state.name}</option>
                    </>
                  ))
                }
            </select>
        </div>
        <div>
        <label htmlFor="">Village</label>
            <select name="village" id="" onChange={(e)=>changeVillage(e)}>
                <option value="">--select Village</option>
                {
                  cities.map((city,i)=>(
                    <>
                    <option value={city} key={i}>{city}</option>
                    </>
                  ))
                }
            </select>
        </div>
        <table border={2}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>English</td>
              <td><input type="number" 
            name='english'
            value={english}
            className='number'
            onChange={e=>setEnglish(e.target.value)}
            />
              </td>
              <td>{
               (english < 35) ? <span style={{color:"red"}}>Fail</span> : (english >= 35 && english <= 100) ?<span style={{color:"green"}}>Pass</span> : (english && english == "") ? "" : ""
            }
              </td>
            </tr>
            <tr>
              <td>Tamil</td>
              <td><input type="number" 
            name='tamil'
            value={tamil}
            className='number'
            onChange={e=>setTamil(e.target.value)}
            />
              </td>
              <td>{
               (tamil < 35) ? <span style={{color:"red"}}>Fail</span> : (tamil >= 35 && tamil <= 100) ?<span style={{color:"green"}}>Pass</span> : (tamil && tamil == "") ? "?" : ""
            }
              </td>
            </tr>
            <tr>
              <td>Maths</td>
              <td><input type="number" 
            name='maths'
            value={maths}
            className='number'
            onChange={e=>setMaths(e.target.value)}
            />
              </td>
              <td>{
               (maths < 35) ? <span style={{color:"red"}}>Fail</span> : (maths >= 35 && maths <= 100) ?<span style={{color:"green"}}>Pass</span> : (maths && maths == "") ? "?" : ""
            }
            </td>
            </tr>
            <tr>
              <td>Science</td>
              <td><input type="number" 
            name='science'
            value={science}
            className='number'
            onChange={e=>setScience(e.target.value)}
            />
              </td>
              <td>            {
               (science < 35) ? <span style={{color:"red"}}>Fail</span> : (science >= 35 && science <= 100) ?<span style={{color:"green"}}>Pass</span> : (science && science == "") ? "?" : ""
            }
              </td>
            </tr>
            <tr>
              <td>Social</td>
              <td>            <input type="number" 
            name='social'
            value={social}
            className='number'
            onChange={e=>setSocial(e.target.value)}
            />
                </td>
              <td>{
               (social < 35) ? <span style={{color:"red"}}>Fail</span> : (social >= 35 && social <= 100) ?<span style={{color:"green"}}>Pass</span> : (social && social == "") ? "?" : ""
            }
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          
          <label htmlFor="" >Total</label>
          <input type="number"
          name='total'
          value={total}
          readOnly
          onClick={(e)=>AddMark(e)}
          />
        </div>
        <div>
          <label htmlFor="">Average</label>
          <input type=""
          name='total'
          value={avgerage}
          readOnly
          />
        </div>
        <button onClick={(e)=>Random(e)}>Submit</button>
      </form>
    </aside>
    </>
  )
}

export default AddUser
