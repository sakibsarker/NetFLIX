import React,{useState,useCallback} from 'react'
import NavbarItems from './NavbarItems'
import { FaChevronDown } from "react-icons/fa";
import MobileMenu from './MobileMenu';
import {AiOutlineSearch } from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import ProfileMenu from './ProfileMenu';
const NavBar = () => {
  const [mobileMenu,setMobileMenu]=useState(false)
  const [profileMenu,setProfileMenu]=useState(false)
  const toggleMobileMenu=useCallback(()=>{
    setMobileMenu((current)=>!current)
  },[])
  const toggleProfileMenu=useCallback(()=>{
    setProfileMenu((current)=>!current)
  },[])

  return (
    <nav className="w-full fixed z-40 text-white">
        <div className=" px-10 py-6 flex flex-row items-center transition duration-500 bg-zinc-800 bg-opacity-90 md:px-16">
            <img className="h-5 w-20" src='/images/logo.png'/>
            <div className="flex-row ml-10 gap-8 hidden lg:flex">
              <NavbarItems label='Home'/>
              <NavbarItems label='Series'/>
              <NavbarItems label='Films'/>
              <NavbarItems label='New & Popular'/>
              <NavbarItems label='My List'/>
              <NavbarItems label='Browse by languages'/>
            </div>
            <div  onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
              <p className="text-white text-sm">Browse</p>
              <FaChevronDown className="text-white transition"/>
              <MobileMenu visible={mobileMenu}/>
            </div>
            <div className="items-center flex flex-row ml-auto gap-7">
              <div className="text-white hover:text-gray-300 cursor-pointer">
                <AiOutlineSearch/>
              </div>
              <div className="text-white hover:text-gray-300 cursor-pointer">
                <IoMdNotificationsOutline/>
              </div>
              <div className="flex flex-row gap-2 items-center cursor-pointer relative">
                <div className="w-6 h-6 rounded-sm overflow-hidden">
                <img src="/images/default-green.png" alt="profile"/>
                </div>
                <FaChevronDown onClick={toggleProfileMenu}  className="text-white transition"/>
                <ProfileMenu  visible={profileMenu}/>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar