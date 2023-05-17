import {connectToDB} from '@utils/db'

export async function GET(request){
  try {
    await connectToDB();
    const response = new Response("GET ALL SPARE PARTS",{status:200})
    return response;
  } catch (error) {
    return new Response("Something went wrong",{status:500})
  }
}