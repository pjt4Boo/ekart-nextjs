import  connectMongo  from "../../../utils/ConnectMongo";
import PostModel from "../../../models/postModel";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try{
        await connectMongo();
        const PostData = await PostModel.find({});
        return new Response(JSON.stringify(PostData), {
                headers: { "Content-Type": "application/json" }
            });
    } catch (error) {
        console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
 
}