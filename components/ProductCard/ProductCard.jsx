import {images} from '@public/assets/images';
import Link from 'next/link'
import Image from 'next/image';
import { LabelCard,Rating } from '@components';

const ProductCard = () => {
  return (
    <div className='product_card group overflow-hidden border border-black-light rounded-md shadow-lg max-w-xs hover:max-h-[1000px]'>
      <Link href='/' className='block p-4 relative arc__red'>
        <div className='header-card flex justify-between items-start'>
          <div className='flex flex-wrap flex-1 justify-start items-center'>
            <LabelCard text='polecamy' />
            {/* <LabelCard text="nowość"/> */}
            <LabelCard text='okazja' />
          </div>
          <Rating />
        </div>
        <div className='z-[0]'>
          <Image
            src={images.DEFAULT_PORTRAIT}
            alt='Część zamienna do przemysłowych urządzeń pralniczych'
            placeholder='blur-up'
          />
        </div>
        <div className='price relative z-[2] text-white'>
          <div className='mb-2'>promocja</div>
          <div className='flex flex-col items-start justify-center'>
            <b className='font-inter text-lg font-bold mb-2'>665,10 zł</b>
            <span className='line-clamp-2 text-md font-medium'>
              Zawór spustowy MDB-03RA do pralnicowirówek wysokoobrotowych sfsad;lfkas; lksad;f lsad
            </span>
          </div>
        </div>
      </Link>
      <div className='compare relative text-white bg-primary-light bg-opacity-80 w-full h-0 max-h-[200px] group-hover:h-auto transition-all duration-150 ease-in-out'>
        <label className='px-4 py-2 flex justify-start items-center'>
          <input className='mr-2' type="checkbox" checked={true}/>
          <span className='text-xs'>Porównaj</span>
        </label>
      </div>
    </div>
  );
}

export default ProductCard