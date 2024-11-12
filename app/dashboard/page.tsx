"use client"
import SearchSection from '@/components/SearchSection'
import TemplateListSection from '@/components/TemplateListSection'
import React from 'react'

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = React.useState<String>('')

  return (
    <div>
      {/* Search Section  */}
      <SearchSection onSearchInput={(value:string)=>setSearchQuery(value)}/>
      {/* Templeted */}
      <TemplateListSection searchQuery={searchQuery}/>
    </div>
  )
}

export default Dashboard