
import { Search } from 'lucide-react'
import React from 'react'


const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between iteams-center '>
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <Search className='text-primary'/>
        <input type="text" placeholder="Search..." className="outline-none bg-transparent text-primary" />

      </div>
        
      <div >
        <h2 className="bg-primary p-1 rounded-full text-white px-2 text-xs">🔥Join MemberShip just for ₹99/year</h2>
      </div>

    </div>
  )
}

export default Header