"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { images } from "@public/assets/images";
import { LabelCard, Rating, GalleryCard, LikeButton, SpecialOffer,Input } from "@components";

const tmpImages = [1,2,3,4,5,6,7,8,9,10];

const ProductCard = ({ color }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  let cardColor = "product-card__black";
  switch (color) {
    case "primary":
      cardColor = "product-card__primary";
      break;
    case "accent":
      cardColor = "product-card__accent";
      break;
    case "green":
      cardColor = "product-card__green";
      break;
    case "gold":
      cardColor = "product-card__gold";
      break;
    default:
      cardColor = "product-card__black";
      break;
  }

  return (
    <div className='relative group bg-white max-w-[320px]'>
      <GalleryCard items={tmpImages} />
      <div className='relative bg-white shadow-lg hover:scale-105 transition-transform duration-150'>
        <div
          className={`product-card ${cardColor} group  overflow-hidden border border-black-light rounded-md  max-w-xs hover:max-h-[1000px]`}>
          <Link href='/' className='relative block p-4 arc'>
            <div className='product-card_header relative flex justify-between items-start'>
              <div className='flex flex-wrap flex-1 justify-start items-center'>
                <LabelCard text='polecamy' />
                <LabelCard text="nowość"/>
                <LabelCard text='okazja' />
              </div>
              <Rating />
              <LikeButton isFavorite={isFavorite} handleFavorite={handleFavorite} />
            </div>
            <div className='product-card_image z-[0]'>
              <Image
                src={images.DEFAULT_PORTRAIT}
                alt='Część zamienna do przemysłowych urządzeń pralniczych'
                placeholder='blur-up'
              />
            </div>
            <div className='product-card_details relative z-[2]'>
              <div className='mb-2 grid grid-cols-2'>
                <SpecialOffer />
                <div className="self-center justify-self-end"> <div className='bg-green-medium border px-1 py-px border-green rounded-md max-w-[80px] text-green text-sm text-center font-semibold'> dostawa <span className='uppercase text-md font-bold'>gratis</span> </div> </div>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <span className='font-inter text-xl font-bold mb-2 text-black'>
                  665,<span className='text-sm'>10 zł</span>
                </span>
                <span className='line-clamp-2 text-md font-medium'>
                  Zawór spustowy MDB-03RA do pralnicowirówek wysokoobrotowych
                </span>
              </div>
            </div>
          </Link>
          <div className='product-card_compare relative w-full h-0 max-h-[200px] group-hover:h-auto transition-all duration-150 ease-in-out'>
            <div className="relative px-4 py-2">
              <Input label="porównaj" color={color}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  color: PropTypes.string,
};

export default ProductCard;
