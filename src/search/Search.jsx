import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import $ from"jquery"
import { useEffect } from 'react';

import style from '../details/home.module.css'

import { Link } from 'react-router-dom';


export default function Search() {
  let[search,setsearch]=useState('');

  let [list,setlist]=useState([])
  async function getdata(name){
  let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  setlist(data.meals)
 
  
  // console.log(list);
  }
  useEffect(()=>{
    document.getElementById('name').addEventListener('input',function(){
      let searchname=$('#name').val()
      console.log(searchname);
      getdata(searchname)
      
      
      })
document.getElementById('frist').addEventListener('input',function(){
      let searchname=$('#frist').val()
     getdata(searchname)
      
      
      })
  },[])





  return (
<>
<div className='d-flex m-5 justify-content-center' >
  <input type="text" className='w-25 form-control me-3'  placeholder='search by name' id="name" />
  <input type="text" className='w-25 form-control'  placeholder='Serach by Frist litter' id="frist" />

</div>

<div className="container m-5">
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
  

</div>
 
  
  



</>
  )
}
