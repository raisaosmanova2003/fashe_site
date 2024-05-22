import { useEffect, useState } from 'react'
import './App.css'
import ROUTES from './routes/routes'
import axios from 'axios';
import MainContext from "../src/context/context"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BASE_URL } from './config/config';
import { HelmetProvider } from "react-helmet-async";
function App() {
 const router=createBrowserRouter(ROUTES)
const [data,setdata]=useState([])
const [loading,setLoading]=useState(true)
// const [error,setError]=("")
const[basket,setBasket]=useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) :[])

useEffect(()=>{
  axios.get(BASE_URL).then((res)=>{
    setdata([...res.data])
  })
},[])
useEffect(()=>{
  localStorage.setItem("basket",JSON.stringify(basket))
},[basket])
function addToBasket (id){
  let basketItem=basket.find((x)=>x._id==id)
  if(!basketItem){
    let target=data.find((x)=>x._id==id)
   let newItem={
    ...target,
    count:1,
    totalPrice:target.price
   }
   setBasket([...basket,newItem])
  }
  else {
    basketItem.count+=1
    basketItem.totalPrice+=basketItem.price
    setBasket([...basket])
  }
}
function deleteFromBasket (id ) {
  let target=basket.find((x)=>x._id==id)
  if (target.count>1){
    target.count-=1
    target.totlPrice-=target.price
    setBasket([...basket])
  }
  else {
    setBasket([...basket.filter((x)=>x._id!=id)])
  }
}
const contextdata={data,setdata,loading,setLoading,basket,setBasket,deleteFromBasket,addToBasket}
  return (
    <MainContext.Provider value={contextdata}>
    <HelmetProvider>
    <RouterProvider router={router}/>
    </HelmetProvider>
      
    </MainContext.Provider>
  )
}

export default App
