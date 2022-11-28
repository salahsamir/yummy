import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'


export default function Ing() {
  let[content,setcontent]=useState([{}])
  useEffect(()=>{
    setcontent([{
      name:'Chicken',
      cont:'The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one'
  
  },
  {
      name:'Salmon',
      cont:'Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same'
  },
  {
      name:'Beef',
      cont:'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. '
  },
  {
      name:'Pork',
      cont:'Pork is the culinary name for the flesh of a domestic pig (Sus scrofa domesticus). It is the most commonly'
  },
  {
      name:'Avocado',
      cont:'The avocado, a tree with probable origin in South Central Mexico, is classified as a member of the flowering plant'
  },{
      name:'Apple Cider Vinegar',
      cont:'Apple cider vinegar, or cider vinegar, is a vinegar made from fermented apple juice, and used in salad dressings, marinades,'
  },{
      name:'Asparagus',
      cont:"Asparagus, or garden asparagus, folk name sparrow grass, scientific name Asparagus officinalis, is a perennial flowering plant species in the"
  },
  {
      name:'Aubergine',
      cont:"Eggplant (US, Australia), aubergine (UK), or brinjal (South Asia and South Africa) is a plant species in the nightshade family "
  },{
      name:"Baby Plum Tomatoes",
      cont:"The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The"
  },
  {
      name:"Bacon",
      cont:"Bacon is a type of salt-cured pork. Bacon is prepared from several different cuts of meat, typically from the pork"
  },
  {
      name:"Baking Powder",
      cont:"Baking powder is a dry chemical leavening agent, a mixture of a carbonate or bicarbonate and a weak acid. The "
  },{
    name:"Balsamic Vinegar",
    cont:"Balsamic vinegar (Italian: aceto balsamico), occasionally shortened to balsamic, is a very dark, concentrated, and intensely flavoured vinegar originating in "
  }
  ,
  {
      name:"Basil",
      cont:"Basil, also called great basil, is a culinary herb of the family Lamiaceae (mints). Basil is native to tropical regions from"
  },
  {
      name:"Basil Leaves",
      cont:"Basil, also called great basil, is a culinary herb of the family Lamiaceae (mints). "
  },
  {
      name:"Basmati Rice",
      cont:"Basmati is a variety of long, slender-grained aromatic rice which is traditionally from the Indian subcontinent. As of 2018-19, India"
  },
  {
      name:"Bay Leaf",
      cont:"The bay leaf is an aromatic leaf commonly used in cooking. It can be used whole, or as dried and"
  }
  
  ])

  
  },[])
  return (
   <>
   <div className="container m-5">
    <div className="row">
      {content.map((ele,index)=>
      <div class="col-md-3" key={index}>
        <Link className='text-decoration-none' to={`/details3/${ele.name}`} >
      <div class="inner text-center m-4 text-black  h-75 w-100  p-3 shadow ">
      <i class="fa-solid fa-bowl-food fa-3x text-success"></i>
      <h5 class=" py-2 m-2">{ele.name}</h5>
      <p className='m-3'>{ele.cont}</p>

      </div>
      </Link>
   </div>
      
      
      )}
    </div>

   </div>
  
 
   
   
   </>
  )
}
