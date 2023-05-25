import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@public/assets/images';

const ProductCard = (props) => {
  return (
    <Link href="" className='relative overflow-hidden block border border-black-light w-[230px] mx-2 mb-4 p-4 rounded-md'>
      <Image src={images.CARD_LANDSCAPE_WEBP} alt="" />
      <div className=' relative z-10 flex flex-col justify-center items-end'>
        <p className='lowercase text-right font-light font-html leading-4 text-xs mb-4 line-clamp-2'>Pralnicowirówka wolnostojąca wysokoobrotowa</p>
        <span className='border border-accent-dark py-px px-2 bg-black rounded-md text-sm text-white font-semibold font-accent'>FX-105</span>
      </div>
      <div className='absolute inset-x-0 inset-y-0 bg-gradient-linear-accent clip-product-card'></div>
    </Link>
  )
};

ProductCard.propTypes = {};

export default ProductCard;
