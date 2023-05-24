import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { images } from '@public/assets/images';

const ProductCard = (props) => {
  return (
    <div className='border max-w-[320px] mx-4'>
      <Image src={images.CARD_LANDSCAPE_WEBP} alt="" />
    </div>
  )
};

ProductCard.propTypes = {};

export default ProductCard;
