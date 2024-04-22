import { NextResponse } from "next/server"


export const GET=(request:Request)=>{
    return NextResponse.json({message:'hey Emmma'})
}

export const POST = async (request: Request) => {
    const data = await request.json()
 return NextResponse.json({message:data})
  }