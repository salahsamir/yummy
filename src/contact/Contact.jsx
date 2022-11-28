import React, { useState } from 'react'

import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  let navigate=useNavigate()
  let[loading,setloading]=useState(false)
  let [error, seterrors] = useState('')
  let [errorlist,seterrorlist]=useState([])
  let [users, setusers] = useState({
    "first_name":" ",
     "last_name":" ",
      "email":" ",
       "password":" ",
        "age":"" }

  )
  ////func kasa bel datausers
  function userdata(e) {
    let usercopy = { ...users };
    usercopy[e.target.name] = e.target.value;
    setusers(usercopy);
    console.log(usercopy);
   
  }
  async function dataApi() {
    let {data} = await axios.post(`https://route-egypt-api.herokuapp.com/signup`,users);
  

    if (data.message==="success") {
    //  seterrors( )
    setloading(false)
  
     alert('ok')
    } else {
    setloading(false)

      seterrors(data.message)
    }
  }
  //////func kasa b submit
  function datasubmit(e) {
    e.preventDefault()
    setloading(true)
    dataApi()
    let x=validation()
   
    if(x.error){
    seterrorlist(x.error.details)
    // console.log(errorlist[2].context.label);
    setloading(false)
   
    }
    else{

    seterrorlist([])
    dataApi()

    }
  }
  ////for validation
  function validation() {
    const schema = Joi.object({
      frist_name: Joi.string().min(3).max(30).required(),
      last_name: Joi.string().min(3).max(30).required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      }),
      age: Joi.number().min(16).max(60).required(),
    });
    return schema.validate(users,{abortEarly:false});
  }

  return (
    <>
      <div className="content m-5">

        {error ? <p className="alert alert-danger">{error}</p> : ''}
    
        <h1>Contact us</h1>

        <form onSubmit={datasubmit}>
          <label htmlFor="first_name">Fristname :</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="form-control myInput my-2"
            onChange={userdata}
          />
          {errorlist.filter((ele)=>ele.context.label=='frist_name')[0]?<div className='alert alert-info'>
          
          <p>
          {errorlist.filter((ele)=>ele.context.label=='frist_name')[0]?.message}

          </p>
        </div>:''

          }
          
          <label htmlFor="last_name">Lastname :</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="form-control myInput my-2"
            onChange={userdata}
          />
          {errorlist.filter((ele)=>ele.context.label=='last_name')[0]?<div className='alert alert-info'>
          
          <p>
          {errorlist.filter((ele)=>ele.context.label=='last_name')[0]?.message}

          </p>
        </div>:''

          }
          
           
 

          <label htmlFor="email">Email :</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control myInput my-2"
            onChange={userdata}
          />
          {errorlist.filter((ele)=>ele.context.label=='email')[0]?<div className='alert alert-info'>
          
          <p>
          {errorlist.filter((ele)=>ele.context.label=='email')[0]?.message}

          </p>
        </div>:''

          }
          
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control myInput my-2"
            onChange={userdata}
          />
           {errorlist.filter((ele)=>ele.context.label=='password')[0]?<div className='alert alert-info'>
          
          <p>
          {errorlist.filter((ele)=>ele.context.label=='password')[0]?.message}

          </p>
        </div>:''

          }
          
          <label htmlFor="age">Age :</label>
          <input
            type="text"
            id="age"
            name="age"
            className="form-control myInput my-2"
            onChange={userdata}
          />
           {errorlist.filter((ele)=>ele.context.label=='age')[0]?<div className='alert alert-info'>
          
          <p>
          {errorlist.filter((ele)=>ele.context.label=='age')[0]?.message}

          </p>
        </div>:''

          }
          
    
          <button type='submit' className="btn btn-info float-end">
            {loading==true?
            <i className='fas fa-spinner fa-spin'></i>:"Register"
            }
          </button>
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  )
}
