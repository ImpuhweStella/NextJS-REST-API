import { deletePost, getPostById, updatePost } from "@/lib/data"
import { NextResponse } from "next/server"
//get a post by id
export const GET = async (req: Request) =>{
    try {
        const id = req.url.split("blogs/")[1];
        const post = getPostById(id);
        if(!post){
            return NextResponse.json({message:"Error"}, {status: 404})
        }
        return NextResponse.json({
            message:"OK",
            post
        },{
            status:200
        })  
    } catch (err) {
        return NextResponse.json({
            message:"Error",
            err
        },{
            status:500
        })  
    }
    
}
//update a post by id
export const PUT = async (req: Request) =>{
    try {
        const {title, description}= await req.json();
        const id = req.url.split("/blogs/")[1];
        updatePost(id, title, description)
        return NextResponse.json({message:"OK"}, {status:200})
    } catch (err) {
        return NextResponse.json({
            message:"Error",
            err
        },{
            status:500
        })  
    }
}
//delete a post by id
export const DELETE = async (req: Request) =>{
    try {
        const id = req.url.split("blogs/")[1];
        deletePost(id);
        return NextResponse.json({message:"Ok"}, {status: 200})

    } catch (err) {
        return NextResponse.json({
            message:"Error",
            err
        },{
            status:500
        })   
    }
}