import React from 'react';
import Link from 'next/link'

const Menu = () => {
  return (
    <nav className='mb-8 border-t border-b border-black-medium w-full z-20 '>
      <ul className='flex border'>
        <li className='relative'>
          <Link href='/' className='block py-2 px-4 uppercase text-sm font-medium'>Pralnice</Link>
        </li>
        <li className=''>
          <Link href='/' className='block py-2 px-4 uppercase text-sm font-medium'>Wirówki pralnicze</Link>
        </li>
        <li className=''>
          <Link href='/' className='block py-2 px-4 uppercase text-sm font-medium'>Pralnicowirówki</Link>
        </li>
        <li className='menu-item relative triangle'>
          <Link href='/suszarki-przemyslowe' className='block py-2 px-4 uppercase text-sm font-medium'>Suszarki</Link>
          <div className='absolute top-full lef-0 bg-white min-w-max border-t-8 border-primary shadow-lg'>
            <p className='max-w-lg p-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates quo ducimus molestias facere!
              Placeat suscipit sunt quas, veritatis beatae repellat qui adipisci ratione maxime incidunt enim sed odio
              quidem.
            </p>
          </div>
        </li>
        <li className='menu-item relative triangle'>
          <Link href='/prasownice' className='block py-2 px-4 uppercase text-sm font-medium'> Prasownice </Link>
          <div className='absolute top-full lef-0 bg-white min-w-max border-t-8 border-primary shadow-lg'>
            <p className='max-w-lg p-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates quo ducimus molestias facere!
              Placeat suscipit sunt quas, veritatis beatae repellat qui adipisci ratione maxime incidunt enim sed odio
              quidem. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quod laboriosam labore aliquid,
              sit pariatur maiores architecto id qui, alias adipisci? Ea possimus deleniti consequatur fugit similique
              hic nostrum? Aperiam.
            </p>
          </div>
        </li>
        <li className=''>
          <Link href='/' className='block py-2 px-4 uppercase text-sm font-medium'> Bariery higieny </Link>
        </li>
        <li className=''>
          <Link href='/' className='block py-2 px-4 uppercase text-sm font-medium'> Wózki i Regały </Link>
        </li>
        <li className=''>
          <Link href='/' className='block py-2 px-4 uppercase text-sm font-medium'> Akcesoria </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu