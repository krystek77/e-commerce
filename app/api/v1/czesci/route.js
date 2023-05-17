
const data = [
  {
    _id: 1,
    category: 'pralnice',
    subcategory: 'pralnice-bębnowe-o-zaladunku-bocznym',
    model: 'PBE-30',
  },
  {
    _id: 2,
    category: 'pralnice',
    subcategory: 'pralnice-bębnowe-o-zaladunku-czolowym',
    model: 'PCE-30A',
  },
];

export async function GET(request){
    console.log(request.url)
    const result = new URL(request.url)
    console.log(result)
    console.log(result.search)
    console.log(result.searchParams)

    const response = new Response(JSON.stringify(data),{status:200,headers:{'Content-Type':"application/json"}})
    console.log(response)
    return response;
}