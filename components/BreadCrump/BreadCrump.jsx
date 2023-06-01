"use client"
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {FcHome} from '@react-icons/all-files/fc/FcHome'

const breadCrumpData = [
  { 
    _id:1,
    rootURL:"urzadzenia-pralnicze",
    label:'urządzenia pralnicze',
    leafURLs:[
      {_id:1,url:'pralnice',label:'pralnice'},
      {_id:2,url:'pralnicowirowki',label:'pralnicowirówki'}
    ]
  },
  {
    _id:2,
    rootURL:"urzadzenia-pralnicze-samoobslugowe",
    label:'urządzenia pralnicze samoobsługowe',
    leafURLs:[
      {_id:1,url:'pralnicowirowki',label:'pralnicowirówki'}
    ]
  },
  {_id:3,rootURL:"czesci",label:'czesci',leafURLs:[]},
  {_id:4,rootURL:"warsztat",label:'warsztat',leafURLs:[
    {_id:1,url:'konserwacja',label:'konserwacja'},
    {_id:2,url:'narzedzia',label:'narzedzia'},
    {_id:3,url:'dokumentacja',label:'dokumentacja'}
  ]},
  {_id:5,rootURL:"nowosci",label:'nowości',leafURLs:[]},
  {_id:6,rootURL:"okazje",label:'okazje',leafURLs:[]},
]

const BreadCrump = () => {
    const [urls, setUrls] = useState(null)
    const pathname = usePathname();

    useEffect(()=>{
      if(pathname === "/") {setUrls(null);return};
      const segments = pathname.split("/").slice(1);
      const rootSegment = breadCrumpData.find((r)=>r.rootURL===segments[0]);
      if(rootSegment && segments.length > 1){
        const leafs = segments.slice(1);
        const leafURLs = rootSegment.leafURLs.find((leaf)=>leaf.url === leafs[0]);
        setUrls({...rootSegment,under:{...leafURLs}})
      } else {
        setUrls({...rootSegment,under:null})
      }
      return ()=>{}
    },[pathname])


  return (
    <section>
      <nav className="container mx-auto py-4 px-4" aria-label="Breadcrump">
        <ol className='flex justify-start items-center flex-wrap text-sm'>
          <li className='flex justify-start items-center'>
            <span className='mr-2'><FcHome className='w-4 h-4'/></span>
            <Link className='block whitespace-nowrap first-letter:uppercase hover-element hover:underline hover:underline-offset-2' href="/">start</Link>
          </li>
          {urls ? <>
            <li className='flex justify-start items-center'>
              <span className='mx-2'>&#8674;</span>
              <Link className='block whitespace-nowrap first-letter:uppercase hover-element hover:underline hover:underline-offset-2' href={`/${urls.rootURL}`}>{urls.label}</Link>
            </li>
            {urls.under ? <li key={pathname} className='flex justify-start items-center'>
              <span className='mx-2'>&#8674;</span>
              <Link className='block whitespace-nowrap first-letter:uppercase hover-element hover:underline hover:underline-offset-2' href={`/${urls.rootURL}/${urls.under.url}`}>{urls.under.label}</Link>
            </li>:null}
          </> : null }
        </ol>
      </nav>
    </section>
  );
}

BreadCrump.propTypes = {}

export default BreadCrump