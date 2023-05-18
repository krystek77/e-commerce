
//GET http://localhost:5000/api/v1/czesci/pralnice HTTP/1.1
//GET http://localhost:5000/api/v1/czesci/pralnice/pralnice-benowe-o-zaladunku-czolowym HTTP/1.1
//GET http://localhost:5000/api/v1/czesci/pralnice/pralnice-benowe-o-zaladunku-czolowym/PBE-15 HTTP/1.1

import SparePart from "@models/sparepart";
import {connectToDB} from '@utils/db'

export async function GET(_,{params}){
  console.log("GET FILTERED")
  var filterDocument = params.slug.reduce(function(acc, item, index) {
    if(index === 0 ) acc['equipmentSlug']=item;
    if(index === 1 ) acc['typeSlug']=item;
    if(index === 2 ) acc['modelSlug']=item
    return acc;
  }, {});

  try {
    await connectToDB();
    const docs = await SparePart.find( filterDocument, { __v: 0 }, { sort: { name: 1 } } );
    return new Response(JSON.stringify(docs), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: error.status, });
  }
}