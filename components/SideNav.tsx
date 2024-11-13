"use client"
import {  FileClock, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
const MenuList = [
  { 
    name: "Home", 
    path: "/dashboard" ,
    icon:Home
  },{ 
    name: "History", 
    path: "/dashboard/history" ,
    icon:FileClock
  },{ 
    name: "Billing", 
    path: "/dashboard/billing" ,
    icon: Wallet
  },{ 
    name: "Setting", 
    path: "/dashboard/setting" ,
    icon: Settings
  },
]
const path = usePathname();


  return (
    <div className='h-screen shadow-md border py-5 bg-white '>
      <Link href="/"className='flex   items-center gap-2 p-2 py-4'>
      <Image alt='logo' src="/logo.svg" width={50} height={50} className='rotate-180'/>
      <h1  className='text-xl font-bold'>SPR's AI Content</h1>
      </Link>
      <hr className='border'/>
      <div className='mt-6 px-5'>
        {
          MenuList.map((item, index) => ( 
            <Link href={item.path}  className={`flex gap-2 mb-2 p-3 items-center hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path === item.path && "bg-primary text-white"}`} key={index}>
              <item.icon className='w-7 h-7'/>
              <h2 className='text-xl font-medium'>{item.name}</h2>
              </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SideNav