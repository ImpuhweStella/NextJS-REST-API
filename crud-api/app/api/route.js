import Blog from "@/models/BlogModel";
import connectDB from "@/utils/connection";
import { NextResponse } from "next/server";

// export default function handler (req, res){
//  console.log("connecting DB");
//  connectDB();
//  console.log("DB connected");
 
//  res.status(200).json({name : "Stella"})
// }




export async function GET(){
    connectDB()
    const record = await Blog.find()
    return NextResponse.json({record})
}


// export const POST = async (req) =>{
//     const {title, description} = await req.json();
//     try {
//       const post = {title, description, date:new Date()};
//       addPost(post);
//       return NextResponse.json({message: "OK", post}, {status:201})

//     } catch (err) {
//         return NextResponse.json({message:"Error",err}, {status:500}) 
//     }
// }



export async function POST(req){
    const {title,description} = await req.json()
    connectDB()
    const record = await  Blog.create({
        title:title,
        description:description,
        date:new Date()
    })
    console.log(record)
    return NextResponse.json({message:"Blog  has created successfull"})
}