import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-6 justify-center m-5 bg-gray-700 p-5 text-2xl'>
        <NavLink to='/'>
            Home
        </NavLink>

        <NavLink to='/notes'>
            Notes
        </NavLink>
    </div>
  )
}

export default Navbar