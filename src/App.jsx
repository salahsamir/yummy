
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Layout from'./layout/Layout'
import Area from'./area/Area'
import Categories from'./categories/Categories'
import Contact from'./contact/Contact'
import Search from'./search/Search'
import Ing from'./ing/Ing'
import Home from'./home/Home'
import Details from './details/Details';
import Details1 from './details/Details1';
import Details2 from './details/Details2';
import Details3 from './details/Details3';




function App() {
  let routes=createBrowserRouter([{
    path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'area',element:<Area/>},
      {path:'categories',element:<Categories/>},
      {path:"search",element:<Search/>},
      {path:"ing",element:<Ing/>},
      {path:"contact",element:<Contact/>},
      {path:"details/:strMeal",element:<Details/>},
      {path:"details1/:country",element:<Details1/>},
      {path:"details2/:strCategor",element:<Details2/>},
      {path:"details3/:name",element:<Details3/>},






    ]
  }])

  
  return (
 <>
<RouterProvider router={routes}/>


 </>
  );
}

export default App;
