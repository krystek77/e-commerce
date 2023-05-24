import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@public/assets/images';

const ProductCard = (props) => {
  return (
    <Link href="" className='relative overflow-hidden block border border-black-light max-w-[320px] mx-4 p-4 rounded-md'>
      <Image src={images.CARD_LANDSCAPE_WEBP} alt="" />
      <div className=' relative z-10 flex flex-col justify-center items-end'>
        <p className='lowercase text-right font-medium font-html leading-6 text-lg mb-2'>Pralnicowirówka wolnostojąca wysokoobrotowa</p>
        <span className='border border-black py-1 px-2 bg-black-medium rounded-md text-base text-white font-semibold font-accent'>FX-105</span>
      </div>
      <div className='absolute inset-x-0 inset-y-0 bg-gradient-linear-accent clip-product-card'></div>
    </Link>
  )
};

ProductCard.propTypes = {};

export default ProductCard;
