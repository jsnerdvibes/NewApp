import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'


function Header() {

  const nevigate = useNavigate()

  const [search,setSearch]=useState("")


  const handleClick=()=>{

    nevigate(`/Search/${search}`);

  }






  return (
    <>
  <div className='flex w-full justify-center mt-3' >
      <div className='h-24 bg-gray-900 rounded-xl border flex items-center justify-between md:justify-evenly md:rounded-xl md:border md:w-3/5 md:mt-4'>
        <h1 className='font-sans font-semibold text-xl	ml-2 text-white md:mx-8'> <Link to={"/"}> ACONEWS </Link> </h1>
        <div className='flex items-center md:mx-8'>
        <input type="text" id="first_name" 
        className="bg-gray-700 border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/4 md:w-full p-2.5 ml-4"
        placeholder="Custom Search (eg : sports)" 
        required
        onChange={(e)=>setSearch(e.target.value)}
        
        />
        <button 
        className="bg-indigo-700 h-10 w-10 mr-2 ml-1 md:w-14 flex items-center justify-center rounded-lg"
        onClick={handleClick}
        
        >  <svg className="text-gray-100 w-5 h-5"
        xmlns="http://www.w3.org/2000/svg" width="24"  height="24"   viewBox="0 0 24 24"  strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
        </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Header