import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


import style from '../details/home.module.css'

import { Link, useParams } from 'react-router-dom';


export default function Search() {
  let param=useParams()
  let[loading,setloading]=useState(false)
  console.log(param.name);
  let [list,setlist]=useState([])
  async function getdata(){
  let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${param.name}`);
  setlist(data.meals)
//   console.log(data.meals);
  }
  useEffect(()=>{
   getdata()
   setloading(true)
  },[])





  return (
<>


 <div className="container m-5">
{loading?
    <div className="row g-3 m-5">
  {list.map((ele,index)=>
 
  <div className="col-md-3" key={index}>
      <Link className='nav-link'  to={`/details/${ele.strMeal}`}>
<div className={`${style.inner} `} >
<img src={ele.strMealThumb} className={`w-100 ${style.img} `} alt="" />
<div className={`${style.hover}`}>

  <h3 className='px-2' >{ele.strMeal} </h3>

</div>
  </div>  
</Link>

  </div>
    )}
  
</div>
  :
  <div className='w-100 h-100 d-flex justify-content-center align-items-center m-5'>
      <i className='fas fa-spinner fa-spin  text-black fa-3x'></i>
    </div>





}

</div> 
 
  
  



</>
  )
}
