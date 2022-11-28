import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Details from '../details/Details'
import style from '../details/home.module.css'

export default function Home() {
  // let navigate=useNavigate("")
  let[loading,setloading]=useState(false)

  let [list,setlist]=useState([])
  async function getdata(){
  let {data}=await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s');
  setlist(data.meals)
  }
  useEffect(()=>{
    getdata()
    setloading(true)
  },[list])
 

  return (
<>
{loading==true?
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
  
</div>:
    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
    <i className='fas fa-spinner fa-spin  text-black fa-3x'></i>
  </div>
}
</>
  )
}
