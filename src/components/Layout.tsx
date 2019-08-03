import React from 'react'
import { Link } from 'gatsby'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </nav>
      <>{children}</>
    </div>
  )
}

export default Layout
