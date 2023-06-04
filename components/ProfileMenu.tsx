import { signOut } from 'next-auth/react';
import React from 'react'
import userCurrentUser from "@/hooks/useCurrentUser"
interface ProfileMenuProps{
    visible:boolean;
}
const ProfileMenu:React.FC<ProfileMenuProps>  = ({visible}) => {
    const {data:user}=userCurrentUser();
    if(!visible){
        return null;
    }
  return (
    
    <div className="bg-black w-56 absolute top-14 py-5 right-0 flex-col border-2 border-gray-800 rounded-md">
        <div className="flex-col flex gap-4">
        <div className="flex flex-row items-center">
        <div className="px-5 text-center text-white">
            <div className="w-6 h-6 rounded-sm">
            <img src="/images/default-green.png" alt="profile"/>
            </div>
        </div>
        <div className="hover:underline"> {user?.name}</div>
    </div>
    <div className="border-t-2">
        <div onClick={()=>signOut()} className="px-10 text-center hover:underline">
        Log out
        </div>
    </div>
        </div>
   
</div>
  )
}

export default ProfileMenu