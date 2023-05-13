import Input from '@/components/Input'
import axios from 'axios';
import React, { useCallback, useState } from 'react'
import {signIn} from "next-auth/react"
import { useRouter } from 'next/router';
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

const Auth = () => {
  const router=useRouter();
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('')
  const [variant,setVariant]=useState('login');

  const toggleVariant=useCallback(()=>{
    setVariant((currentVariant)=>currentVariant==='login'?'register':'login');

  },[])

  const login=useCallback(async()=>{
    try{
      await signIn('credentials',{
        email,
        password,
        redirect:false,
        callbackUrl:'/'
      })
      router.push('/')

    }catch(error){
      console.log(error)
    }
  },[email,password,router])

  const register=useCallback(async ()=>{
    try{
      await axios.post('/api/register',{
        email,
        name,
        password

      });
      login();

    }catch(error){
      console.log(error)
    }

  },[email,name,password,login])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-fixed">

      <div className="bg-black h-full w-full lg:bg-opacity-60">
          <nav className="px-12 py-5">
            <img src='./images/logo.png' alt='logo' className="h-10"/>
          </nav>
          <div className="flex justify-center">
            <div className="bg-black lg:bg-opacity-50 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-3xl mb-8 font-semibold">
                {variant==='login'?'Sign in':'Create an account'}
              </h2>
              <div className="flex flex-col gap-4 text-white">
                {variant==='register'&&(
              <Input lable='Username' onChange={(e:any)=>setName(e.target.value)} id='name' type="text"value={name}/>
              )}
              <Input lable='email' onChange={(e:any)=>setEmail(e.target.value)} id='email' type='email' value={email}/>
              <Input lable='Password' onChange={(e:any)=>setPassword(e.target.value)} id='password' type='password' value={password}/>
              </div>
              <button onClick={variant==='login'?login:register} className="bg-red-600 text-white rounded-md pt-1 pb-1 mt-5 w-full hover:bg-red-700 transition text-sm "> {variant==='login'?'Login':'Sign up'}</button>
              <div className="h-full w-full flex flex-row justify-center mt-5 gap-3">
                <div onClick={()=>signIn('google',{callbackUrl:'/'})} className=" h-10 w-10 bg-white rounded-3xl items-center flex justify-center hover:bg-slate-300"><FcGoogle size={25}/></div>
                <div onClick={()=>signIn('github',{callbackUrl:'/'})} className=" h-10 w-10 bg-white rounded-3xl items-center flex justify-center hover:bg-slate-300"><FaGithub size={25}/></div>
              </div>
              <p className=" text-neutral-400 text-sm mt-6 "> {variant==='login'?'First time using Netflix?':'You have already account?'} <span onClick={toggleVariant} className="text-white hover:underline cursor-pointer ml-1"> {variant==='login'?'Create an account':'Login'}</span></p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Auth