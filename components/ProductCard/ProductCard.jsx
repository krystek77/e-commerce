import Link from 'next/link'
import Image from 'next/image';
import PropTypes from 'prop-types'
import {images} from '@public/assets/images';
import { LabelCard, Rating, GalleryCard } from "@components";

const tmpImages = [1,2]

const ProductCard = ({color}) => {
  let cardColor = "product-card__black";

  switch (color) {
    case "primary": cardColor = "product-card__primary"; break;
    case "accent": cardColor = "product-card__accent"; break;
    case "green": cardColor = "product-card__green"; break;
    case "gold": cardColor = "product-card__gold"; break;
    default: cardColor="product-card__black"; break;
  }

  return (
    <div className='relative'>
      <GalleryCard items={tmpImages} />
      <div className='relative shadow-lg hover:scale-105 transition-transform duration-150'>
        <div
          className={`product-card ${cardColor} group  overflow-hidden border border-black-light rounded-md  max-w-xs hover:max-h-[1000px]`}>
          <Link href='/' className='relative block p-4 arc'>
            <div className='product-card_header flex justify-between items-start'>
              <div className='flex flex-wrap flex-1 justify-start items-center'>
                <LabelCard text='polecamy' />
                {/* <LabelCard text="nowość"/> */}
                <LabelCard text='okazja' />
              </div>
              <Rating />
            </div>
            <div className='product-card_image z-[0]'>
              <Image
                src={images.DEFAULT_PORTRAIT}
                alt='Część zamienna do przemysłowych urządzeń pralniczych'
                placeholder='blur-up'
              />
            </div>
            <div className='product-card_details relative z-[2] '>
              <div className='product-card_special-offer mb-2'>promocja</div>
              <div className='flex flex-col items-start justify-center'>
                <span className='font-inter text-xl font-bold mb-2 text-black'>
                  665,<span className='text-sm'>10 zł</span>
                </span>
                <span className='line-clamp-2 text-md font-medium'>
                  Zawór spustowy MDB-03RA do pralnicowirówek wysokoobrotowych sfsad;lfkas; lksad;f lsad
                </span>
              </div>
            </div>
          </Link>
          <div className='product-card_compare relative w-full h-0 max-h-[200px] group-hover:h-auto transition-all duration-150 ease-in-out'>
            <label className='px-4 py-2 flex justify-start items-center'>
              <input className='mr-2' type='checkbox' />
              <span className='text-xs'>Porównaj</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  color: PropTypes.string,
};

export default ProductCard