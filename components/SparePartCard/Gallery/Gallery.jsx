import Image from 'next/image';
import {images} from '@public/assets/images'
import {BsChevronBarUp} from '@react-icons/all-files/bs/BsChevronBarUp';
import {BsChevronBarDown} from '@react-icons/all-files/bs/BsChevronBarDown';

const Gallery = ({items}) => {
  return items.length > 1 ? (
    <div className='absolute top-0 left-0 w-24 max-h-full rounded-md shadow-lg bg-white group-hover:-translate-x-28 group-hover:z-10 transition-transform duration-150'>
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
export default Gallery;