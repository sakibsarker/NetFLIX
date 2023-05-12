import React from "react";

interface InputProps{
  id:string;
  onChange:any;
  value:string;
  lable:string;
  type?:string;
}


const Input:React.FC<InputProps> = ({id,onChange,value,lable,type}) => {
  return (
    <div className="relative">
       <input id={id} value={value}  type={type} onChange={onChange}
       className="block rounded-sm px-6 pt-4 pb-1 w-full text-md text-white bg-neutral-500 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
    placeholder=" " />
    <label htmlFor={id} className="absolute text-sm text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5" >
      {lable}
    </label>
    </div>
   
  )
}

export default Input