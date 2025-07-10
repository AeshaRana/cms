import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const StudentListing = () => {
  return (
     <div className="app-content">
    <Outlet />
    </div>
  )
}

export default StudentListing