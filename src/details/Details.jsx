import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  let [list,setlist]=useState([])
  let[loading,setloading]=useState(false)


    let params=useParams()
  
    async function detailsByName(){
      let {data} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.strMeal}`)
      setlist(data.meals[0])
     
   

    }

useEffect(()=>{
  detailsByName()
  setloading(true)

},[list])
  return (
  <>
  {loading?
   <div className="conatiner m-5">
   <div className="row">
  
    <div className="col-md-4 ">
      <div className="inner text-center">
        <img src={list.strMealThumb} className="w-100" alt />
        <h2 className="p-3"> {list.strMeal}</h2>
      </div>
    </div>
    <div className="col-md-8">
      <div className="inner">
        <h2>
          Instructions
        </h2>
        <p className="text-muted">
          {list.strInstructions}
        </p>
        <p className="my-2"> Area :<span className="fw-light">{list.strArea}</span>
        </p>
        <p className="mt-2">Category :<span className="fw-light"> {list.strCategory}</span>
        </p>
        <p>
          Recipes :
        </p>
       
        <div className="row" >
        <div className="col-md-3">
            <div className="recipes bg-white  ">
              <p className=" text-black text-center rounded-3">{list
                .strIngredient1}
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="recipes bg-white  ">
              <p className=" text-black text-center rounded-3">{list
                .strIngredient2}
              </p>
            </div>
          </div>
        <div className="col-md-3">
            <div className="recipes bg-white  ">
              <p className=" text-black text-center rounded-3">{list
                .strIngredient3}
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="recipes bg-white  ">
              <p className=" text-black text-center rounded-3">{list
                .strIngredient4}
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="recipes bg-white  ">
              <p className=" text-black text-center rounded-3">{list
                .strIngredient5}
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="recipes bg-white  ">
              <p className=" text-black text-center rounded-3">{list
                .strIngredient7}
              </p>
            </div>
          </div>
         
      
  </div>
          
    
        <h4 className="my-3">Tags: <span className="fw-light fs-5">{list.strTags} </span>
        </h4>
        <button className="btn btn-danger m-2 rounded-2 "><a className='text-decoration-none' href={list.strSource}
              >Source</a></button>
        <button className="btn btn-info  rounded-2 "><a className='text-decoration-none' href={list.strYoutube}>Youtube</a></button>
      </div>
    </div>
  </div>
  
    </div>:
    <div className='w-100 h-100 d-flex justify-content-center align-items-center m-5'>
      <i className='fas fa-spinner fa-spin  text-black fa-3x'></i>
    </div>
  



}

  
 

  
  
  
  </>
  )
}
