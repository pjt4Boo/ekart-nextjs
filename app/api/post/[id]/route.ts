import connectMongo from "@/utils/ConnectMongo";
import { NextResponse } from "next/server";
import PostModel from "../../../../models/postModel";
//Params by default firstone Request ,second only params
export async function GET( request: Request,{ params }: { params: Promise<{ id: string }> }
) {     try{
        await connectMongo();
        const {id} = await params;
        const PostData = await PostModel.findOne({_id:id});
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