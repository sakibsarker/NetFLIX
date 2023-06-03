import React from 'react'
import NavbarItems from './NavbarItems'

const NavBar = () => {
  return (
    <nav className="w-full fixed z-40 text-white">
        <div className=" px-10 py-6 flex flex-row items-center transition duration-500 bg-zinc-800 bg-opacity-90 md:px-16">
            <img className="h-8 w-30" src='/images/logo.png'/>
            <div className="flex flex-row items-center ml-10 gap-8">
              <NavbarItems label='Home'/>
              <NavbarItems label='Series'/>
              <NavbarItems label='Films'/>
              <NavbarItems label='New & Popular'/>
              <NavbarItems label='My List'/>
              <NavbarItems label='Browse by languages'/>
            </div>
        </div>
    </nav>
  )
}

export default NavBar