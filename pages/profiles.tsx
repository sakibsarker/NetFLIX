import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import userCurrentUser from "@/hooks/useCurrentUser"
export async function getServerSideProps(contex:NextPageContext) {
  const session=await getSession(contex)
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
const Profiles = () => {
  const {data:user}=userCurrentUser();
  return (
    <div className="flex justify-center h-full items-center">
      <div className="flex flex-col">
        <h1 className="text-white text-center">Who is watching</h1>
        <div className=" flex items-center justify-center gap-8 mt-10">
          <div onClick={()=>{}}>
            <div className="group flex-row w-44 mx-auto">
              <div className="h-44 w-44 rounded-md flex items-center justify-center border-5">
              <img src="/images/default-green.png" alt="profile"/>
              </div>
              <div className="flex justify-center text-white"> {user?.name}</div>

            </div>

          </div>
        </div>
        </div>
    </div>
  )
}

export default Profiles