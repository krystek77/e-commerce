
const data = [
    {
      _id: 1,
      category: 'pralnice',
      subcategory: 'pralnice-bebnowe-o-zaladunku-bocznym',
      model: 'PBE-30',
    },
    {
      _id: 2,
      category: 'pralnice',
      subcategory: 'pralnice-bebnowe-o-zaladunku-czolowym',
      model: 'PCE-30A',
    },
    {
      _id: 3,
      category: 'wirowki',
      subcategory: '',
      model: 'PCE-30A',
    },
  ];


export async function GET(request,params){
    const url = new URL(request.url);
    console.log(url);
    console.log(params.params.slug[0])
    const result = data.filter((item)=>item.category===params.params.slug[0] && item.subcategory === params.params.slug[1])

    const response = new Response(JSON.stringify({params:params.params,result}), { status: 200 });
    return response;
}