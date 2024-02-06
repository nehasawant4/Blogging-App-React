import {NextResponse} from "next/server";
import prisma from "@/utils/connect";

//Get Single Post
export const GET = async (req, {params})=>{
    const {slug} = params;

    try{
        const postdata = await prisma.post.update({
            where: {slug},
            data:{views:{increment:1}},
            include:{user:true}
        });

        return new NextResponse(
            JSON.stringify(postdata,{status:200})
        );
    }catch (e){
        console.log(e)
        return new NextResponse(
            JSON.stringify({message:"Something went wrong!"},{status:500})
        );
    }
};