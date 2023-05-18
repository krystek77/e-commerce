'use client';
import { useEffect, useState } from "react";

const SparePartsFilter = ({params}) => {
  const [data,setData] = useState([]);
  console.log(params.slug)
  useEffect(()=>{
    let isIgnore = false;
    const fetchData = async ()=>{
      try {
        console.log(`/api/v1/czesci/${params.slug.join('/')}`)
        if(!isIgnore){
          const response = await fetch( `/api/v1/czesci/${params.slug.join('/')}`,{method:"GET"} );
          const result = await response.json();
          console.log("hm",result);
        }
      } catch (error) {
          console.log(error.message);
      }
    }
    fetchData();
    return () => {
      isIgnore = true;
    };
  },[params.slug])

  return (
    <div className="flex flex-col flex-center h-full">
      <h1 className="border-l-2 px-2 border-black mb-6">Cześci zamienne</h1>
    </div>
  )
}

export default SparePartsFilter;