import Image from 'next/image';
import {images} from '@public/assets/images'
import {BsChevronBarDown ,BsChevronBarUp} from 'react-icons/bs'

const GalleryCard = ({items}) => {
  return items.length > 1 ? (
    <div className='absolute top-0 -left-4 -translate-x-full z-10 w-24 max-h-full rounded-md shadow-lg bg-white'>
      <div className='h-full flex flex-col items-center px-1'>
        <button className='p-1 flex flex-center border w-full rounded-tr-md rounded-tl-md'>
          <BsChevronBarUp className='w-5 h-5' />
        </button>
        <div className='max-h-[370px] overflow-hidden my-4 border-b-2 border-black-medium'>
          {items.map((_, index) => (
            <Image
              className='border border-black-light mb-2 rounded-md'
              key={index}
              src={images.DEFAULT_LANDSCAPE}
              alt={`image-${index}`}
            />
          ))}
        </div>
        <button className='p-1 flex flex-center border w-full rounded-br-md rounded-bl-md'>
          <BsChevronBarDown className='w-5 h-5' />
        </button>
      </div>
    </div>
  ) : null;
}
export default GalleryCard;