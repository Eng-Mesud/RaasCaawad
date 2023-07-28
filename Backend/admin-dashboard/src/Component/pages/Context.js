import React from 'react'
import { Outlet } from 'react-router-dom'

function Context() {
  return (
    <div>{<Outlet/>}</div>
  )
}

export default Context