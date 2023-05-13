import { NextApiRequest,NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import pirsmadb from "@/lib/prismadb"
const serverAuth=async(req:NextApiRequest)=>{
    const session=await getSession({req})
}