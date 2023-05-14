import userCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession,signOut } from 'next-auth/react';
import Image from 'next/image'

export async function getServerSideProps(context:NextPageContext) {
  const session=await getSession(context);
  if(!session){
    return{
      redirect:{
        destination:'/auth',
        permanent:false,
      }
    }
  }
  return{
    props:{}

  }
}

export default function Home() {
  const {data:user}=userCurrentUser();
  return (
    <div className="flex justify-center flex-col items-center gap-8 mt-20">
      <p className="bg-green-500 h-10 w-40 flex justify-center items-center">Netflix Dashboard</p>
      <p className="bg-green-500 h-10 w-40 flex justify-center items-center">Logged in as : {user?.email}</p>
      <button onClick={()=>signOut()} className="bg-green-500 rounded-md justify-center flex items-cente w-full">Logout</button>
    </div>
  )
}
