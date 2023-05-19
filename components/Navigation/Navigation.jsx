'use client';
 
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import Links from '@utils/navigation';

const Navigation = () => {
const segment = useSelectedLayoutSegment();
  return (
    <nav className="">
      <ul className={`container mx-auto border-t border-slate-100 flex justify-center items-center`}>
        {Links.map((item) => (
          <li key={item._id}>
            <Link className={`py-4 px-4 block font-accent font-bold uppercase rounded-tr-md rounded-tl-md transition-element hover-element ${segment === item.url ? "active-navigation":"focus-element"} `} href={item.url} >{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
