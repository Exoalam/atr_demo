import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-center m-5 rounded-xl bg-slate-500'>
        <Link className='m-3 p-3' href='/'>Home</Link>
        <Link className='m-3 p-3' href='/products'>Products</Link>
        <Link className='m-3 p-3' href='/adminpage'>Admin</Link>
    </div>
  )
}

export default NavBar