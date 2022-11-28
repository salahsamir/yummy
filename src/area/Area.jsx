import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Area() {
  let [country,setcountry]=useState([])
useEffect(()=>{
setcountry(['American','British','Canadian','Chinese','Croatian','Dutch','Egyptian','French',
'Irish','Italian','Jamaican','Japanese','Kenyan','Malaysian','Mexican','Moroccan','Polish','Portuguese'])
},[country])

  return (
    <>
<div className="conatiner m-5">
<div className="row ">
      {country.map((ele,index)=>
       <div class="col-md-3 " key={index}>
    <Link className='text-decoration-none' to={`/details1/${ele}`} >
    <div class="inner text-center m-3 p-3 rounded-2 shadow text-decoration-none ">
       <i class="fa-solid fa-city fa-3x text-danger "></i>
       <h3 class="text-black-50 m-2 " >{ele}</h3>

       </div>
    </Link>
    </div>
      
      
      
      
      
      )}
   
    
    </div>
</div>
    </>
  )
}
