import {images} from '@public/assets/images';
import Link from 'next/link'
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className='group overflow-hidden border border-black-light rounded-md shadow-lg max-w-xs hover:max-h-[1000px]'>
      <Link href='/' className='block p-4 relative'>
        <div className='grid grid-cols-2 auto-rows-max'>
          <div className='place-self-start border'>Some labels</div>
          <div className='place-self-end border'>Ocena</div>
        </div>
        <Image
          src={images.DEFAULT_PORTRAIT}
          alt='Część zamienna do przemysłowych urządzeń pralniczych'
          placeholder='blur-up'
        />
        <div>
          <div>promocja</div>
          <div className='flex flex-col items-start justify-center'>
            <b className='font-inter border text-lg font-bold'>665,10 zł</b>
            <span className='border line-clamp-2'>Zawór spustowy MDB-03RA do pralnicowirówek wysokoobrotowych sfsad;lfkas; lksad;f lsad</span>
          </div>
        </div>
        <div className='relative w-full h-0 max-h-[200px] group-hover:h-auto transition-all duration-150'>
          <div className='pt-4 pb-1'>Porównaj</div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard