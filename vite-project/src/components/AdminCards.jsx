import React from 'react';
import {useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { useFetch } from '../context/FetchContext';
const AdminCards = (props) => {
  const {param,setParam}=useFetch()
  const navigate=useNavigate();
  const handleOnClick=async(p)=>{
   await setParam(p)
   console.log(p)
   navigate('/admin/fetchItems')
  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="px-20 py-20">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base mb-4">
          {props.description}
        </p>
        
        <div className="flex flex-col space-y-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" onClick={()=>{handleOnClick(props.title)}}>Fetch {props.title}</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Add {props.title}</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Remove {props.title}</button>
        </div>
      </div>
    </div>
  );
};

export default AdminCards;
