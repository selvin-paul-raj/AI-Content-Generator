"use client"
import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white">
        <h2 className=" text-3xl font-bold text-center">Browse All Templates</h2>
        <p className="">What would you like to create Today? </p>
        <div className="w-full flex justify-center items-center">
             <div className='flex gap-2 items-center p-2 border rounded-md bg-white text-primary my-5 w-[50%] '>
                <Search className='text-primary'/>
                <input type='text' placeholder='Search...' className='bg-transparent outline-none w-full' onChange={(e)=>onSearchInput(e.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection
// 