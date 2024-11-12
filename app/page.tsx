import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button ><Link href="/dashboard">Dashboard</Link> </Button>
    </div>
  )
}

export default Home