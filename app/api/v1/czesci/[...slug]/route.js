
export async function GET(request,params){
  try {
    return new Response("GET FILTERD BY PARAMS SPARE PARTS", { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 200 });
  }
}