import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from "../aside/Aside"
export default function Layout() {
  return (
<>
<Aside/>
<div className="container">
  <Outlet/>
</div>
</>
  )
}
