import Input from '@/components/Input'
import React, { useCallback, useState } from 'react'

const auth = () => {
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('')
  const [variant,setVariant]=useState('login');

  const toggleVariant=useCallback(()=>{
    setVariant((currentVariant)=>currentVariant==='login'?'register':'login');

  },[])

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
              <Input lable='Username' onChange={(e:any)=>{e.target.setName}} id='name' value={name}/>
              )}
              <Input lable='email' onChange={(e:any)=>{e.target.setEmail}} id='email' type='email' value={email}/>
              <Input lable='Password' onChange={(e:any)=>{e.target.setPassword}} id='password' type='password' value={password}/>
              </div>
              <button className="bg-red-600 text-white rounded-md pt-1 pb-1 mt-5 w-full hover:bg-red-700 transition text-sm "> {variant==='login'?'Login':'Sign up'}</button>
              <p className=" text-neutral-400 text-sm mt-6 "> {variant==='login'?'First time using Netflix?':'You have already account?'} <span onClick={toggleVariant} className="text-white hover:underline cursor-pointer ml-1"> {variant==='login'?'Create an account':'Login'}</span></p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default auth