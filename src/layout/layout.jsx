import React from 'react'
import "./layout.css"

const Layout = ({children}) => {
  return (
    <div className='pf-layout'>{children}</div>
  )
}

export default Layout