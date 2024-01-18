import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <Link className="btn btn-ghost text-xl" href='/'>Home</Link>
      <Link className="btn btn-ghost text-xl" href='/products'>Products</Link>
      <Link className="btn btn-ghost text-xl" href='/adminpage'>Admin</Link>
    </div>
  )
}

export default NavBar