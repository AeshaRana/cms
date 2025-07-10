import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const CompanyListing = () => {
  return (
  <div className="app-content">
    <Outlet />
    </div>

  )
}

export default CompanyListing