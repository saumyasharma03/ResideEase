import React from 'react'
import { useEffect,useState,useContext } from 'react'
import DisplayItems from './DisplayItems'
import { useFetch } from '../context/FetchContext';
const Fetch = (props) => {
  const {param}=useFetch()
  const[items,setItems]=useState([{price:0,location:"x",img:"default"}])
  const fetchItems=async()=>{
    try{
    const requestOptions={
      method:"GET",
      headers:{"Content-Type": "application/json"}
    }
    const response=await fetch(`http://localhost:5000/fetch/${param}`)
    const data=await response.json()
    await setItems(data) 
    console.log(items)
  }
  catch(error)
  {

  }
}
useEffect(()=>{fetchItems()},[param])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-30">
   {items.length!==0?items.map((item, index) => ( <div >
  <DisplayItems key={item._id || index} item={item} /></div>
)):"  nothing to display"}

    </div>
  )
}

export default Fetch