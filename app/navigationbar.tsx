import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <Link className="btn btn-ghost text-xl" href='/'>Home</Link>
      <Link className="btn btn-ghost text-xl" href='/products'>Products</Link>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn btn-ghost text-xl ">Admin</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link className="btn btn-ghost text-base" href='/adminpage'>Update</Link></li>
          <li><Link className="btn btn-ghost text-base" href='/adminpage'>Create</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar